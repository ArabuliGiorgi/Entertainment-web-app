import { useEffect, useState } from "react"
import Movie from "/images/logo.svg"
import { Input, LgnButton } from "../styled-components/elementsStyles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { createUser } from "../features/accountSlice";
import { setEmailErr, setPassErr, setRepPassErr } from "../features/errorsSlice";
import data from "../../accounts.json"
// import axios from "axios";

export interface AccountState {
  id: number,
  email: string,
  password: string,
  bookmarks: string[]
}

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    repeatPassword: ""
  });
  const [accounts, setAccounts] = useState<AccountState[]>([
    ...data.accounts.map(account => ({
      ...account,
      id: Number(account.id)
    })),
    ...JSON.parse(localStorage.getItem("accounts") || "[]").filter((element: AccountState) => 
      !data.accounts.some(acc => Number(acc.id) === element.id)
    )
  ]);
  const dispatch = useDispatch<AppDispatch>();
  const errors = useSelector((store: RootState) => store.errorReducer);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(accounts));
    console.log(accounts);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accounts.length]);

  function findUser(email: string): AccountState | null {
    let account: AccountState | null = null;
    accounts.forEach((element) => {
      if(email.toLowerCase() === element?.email.toLowerCase()){
        account = { ...element, id: Number(element.id) };
      }
    });
    return account;
  }
  // async function PostData(obj: AccountState) {
  //     const response = await axios.post(
  //       "http://localhost:3000/accounts",
  //       obj
  //     );
  //     if(response.status === 201){
  //       console.log("axios post success");
  //     }
  // }

  function handlePageChange(){
    setIsLogin(!isLogin);
    setInputs({
      email: "",
      password: "",
      repeatPassword: ""
    });
    dispatch(setEmailErr(""));
    dispatch(setPassErr(""));
    dispatch(setRepPassErr(""));
  }
  function HandleLogin(){
    if(inputs.email.trim() === "" || inputs.password.trim() === ""){
      if(inputs.email.trim() === "")
        dispatch(setEmailErr("Can't be empty"));
      if(inputs.password.trim() === "")
        dispatch(setPassErr("Can't be empty"));
      return;
    }
    const account = findUser(inputs.email);
    if(account !== null){
      if(account?.password !== inputs.password){
        dispatch(setPassErr("Incorrect password"));
        return;
      }
    }else{
      dispatch(setEmailErr("User not found"));
      return;
    }
    dispatch(createUser(account.id, account.email, account.password, account.bookmarks));
    navigate("/Home");
  }
  function HandleSignUp(){
    if(inputs.email.trim() === "" || inputs.password.trim() === "" || inputs.repeatPassword.trim() === ""){
      if(inputs.email.trim() === "")
        dispatch(setEmailErr("Can't be empty"));
      if(inputs.password.trim() === "")
        dispatch(setPassErr("Can't be empty"));
      if(inputs.repeatPassword.trim() === "")
        dispatch(setRepPassErr("Can't be empty"));
      return;
    }
    if(findUser(inputs.email) !== null){
      dispatch(setEmailErr("User already exists"));
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(inputs.email)){
      dispatch(setEmailErr("Invalid email"));
      return;
    }
    if(inputs.password.length < 6){
      dispatch(setPassErr("Too short"));
      return;
    }
    if(inputs.password !== inputs.repeatPassword){
      dispatch(setRepPassErr("Not matched"));
      return;
    }
    setAccounts([...accounts, {
      id: accounts[accounts.length - 1].id + 1,
      email: inputs.email.toLowerCase(),
      password: inputs.password,
      bookmarks: []
    }]);
    // PostData({
    //   id: Number(data.accounts[data.accounts.length - 1].id) + 1,
    //   email: inputs.email.toLowerCase(),
    //   password: inputs.password,
    //   bookmarks: []
    // });
    handlePageChange();
  }

  return (
    <div className="w-[100%] pt-[48px] md:pt-[80px] pl-[24px] pr-[24px] flex flex-col items-center gap-[58px] md:gap-[72px]">
      <img src={Movie} alt="Logo" />
      {isLogin ? 
      <div className="w-[100%] max-w-[400px] p-[24px] pb-[32px] md:p-[32px] bg-[#161D2F] rounded-[10px]">
          <h1 className="text-[32px] font-normal leading-[40.32px] tracking-[-0.5px] text-[#FFFFFF] mb-[22px]">Login</h1>
          <div className="w-[100%] relative">
            <Input className="mb-[6px]" type="text" placeholder="Email adress" error={`${errors.emailError !== ""}`} value={inputs.email} onChange={(e) => {
              setInputs({...inputs, email: e.target.value});
              dispatch(setEmailErr(""));
            }}/>
            <h1 className={`${errors.emailError === "" ? 'hidden' : 'block'} absolute top-[18px] right-[17px] text-[13px] font-normal leading-[16.38px] text-[#FC4747]`}>{errors.emailError}</h1>
          </div>
          <div className="w-[100%] relative">
            <Input className="mb-[40px]" type="password" placeholder="Password" error={`${errors.passwordError[0] !== ""}`} value={inputs.password} onChange={(e) => {
              setInputs({...inputs, password: e.target.value});
              dispatch(setPassErr(""));
            }}/>
            <h1 className={`${errors.passwordError[0] === "" ? 'hidden' : 'block'} absolute top-[18px] right-[17px] text-[13px] font-normal leading-[16.38px] text-[#FC4747]`}>{errors.passwordError[0]}</h1>
          </div>
          <LgnButton onClick={HandleLogin}><h1>Login to your account</h1></LgnButton>
          <h1 className="text-[15px] font-normal leading-[18.9px] text-[#FFFFFF] text-center">Don't have an account?
            <span className="ml-[9px] text-[#FC4747] cursor-pointer" onClick={handlePageChange}>Sign Up</span>
          </h1>
      </div> : 
      <div className="w-[100%] max-w-[400px] p-[24px] pb-[32px] md:p-[32px] bg-[#161D2F] rounded-[10px]">
          <h1 className="text-[32px] font-normal leading-[40.32px] tracking-[-0.5px] text-[#FFFFFF] mb-[22px]">Sign Up</h1>
          <div className="w-[100%] relative">
            <Input className="mb-[6px]" type="text" placeholder="Email adress" error={`${errors.emailError !== ""}`} value={inputs.email} onChange={(e) => {
              setInputs({...inputs, email: e.target.value});
              dispatch(setEmailErr(""));
            }}/>
            <h1 className={`${errors.emailError === "" ? 'hidden' : 'block'} absolute top-[18px] right-[17px] text-[13px] font-normal leading-[16.38px] text-[#FC4747]`}>{errors.emailError}</h1>
          </div>
          <div className="w-[100%] relative">
            <Input className="mb-[6px]" type="password" placeholder="Password" error={`${errors.passwordError[0] !== ""}`} value={inputs.password} onChange={(e) => {
              setInputs({...inputs, password: e.target.value});
              dispatch(setPassErr(""));
            }}/>
            <h1 className={`${errors.passwordError[0] === "" ? 'hidden' : 'block'} absolute top-[18px] right-[17px] text-[13px] font-normal leading-[16.38px] text-[#FC4747]`}>{errors.passwordError[0]}</h1>
          </div>
          <div className="w-[100%] relative">
            <Input className="mb-[40px]" type="password" placeholder="Repeat Password" error={`${errors.passwordError[1] !== ""}`} value={inputs.repeatPassword} onChange={(e) => {
              setInputs({...inputs, repeatPassword: e.target.value});
              dispatch(setRepPassErr(""));
            }}/>
            <h1 className={`${errors.passwordError[1] === "" ? 'hidden' : 'block'} absolute top-[18px] right-[17px] text-[13px] font-normal leading-[16.38px] text-[#FC4747]`}>{errors.passwordError[1]}</h1>
          </div>
          <LgnButton onClick={HandleSignUp}><h1>Create an account</h1></LgnButton>
          <h1 className="text-[15px] font-normal leading-[18.9px] text-[#FFFFFF] text-center">Already have an account?
            <span className="ml-[9px] text-[#FC4747] cursor-pointer" onClick={handlePageChange}>Login</span>
          </h1>
      </div>
      }
    </div>
  )
}
