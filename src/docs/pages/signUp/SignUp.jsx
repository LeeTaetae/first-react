import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const {register, handleSubmit, getValues, formState: {isSubmitting, isSubmittes, errors}} = useForm({mode: "onChange"})

    const handleSubmitForm = handleSubmit(async(data) => {
        fetch("url", {
            body: JSON.stringify()
        })
    })

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //a~z까지, A~Z까지, 0~9까지, .,_,%,+,- 쓸 수 있음  \.은 문자열 .으로 읽으라는 표현
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

    return (
        <div>
            <h1>회원가입</h1>
            <form onSubmit={handleSubmitForm}>
                <label>
                    <p>이메일</p>
                    <input type="text" placeholder='이메일 입력' {...register("email" , {
                        required:true,
                        pattern : {
                            value : emailRegex
                        }
                    })} />
                    {console.log("errors", errors)}
                    {errors && errors?.email?.type === "required" && (
                        <p>이메일을 입력하세요.</p>
                    )}
                    {errors && errors?.email?.type === "pattern" && (
                        <p>이메일 양식에 맞게 입력하세요.</p>
                    )}
                </label>
                <label>
                    <p>비밀번호</p>
                    <input type="text" placeholder='비밀번호 입력' name='password' {...register("password" , {
                        required:true,
                        pattern : {
                            value : passwordRegex
                        }
                    })} />
                    {errors && errors?.email?.type === "required" && (
                        <p>비밀번호를 입력하세요.</p>
                    )}
                    {errors && errors?.email?.type === "pattern" && (
                        <p>소문자, 숫자, 특수문자를 각 하나 포함한 8자리 이상이여야 합니다.</p>
                    )}
                </label>
                <label>
                    <p>비밀번호 확인</p>
                    <input type="text" placeholder='비밀번호 확인' name='passwordConfirm'{...register("passwordConfirm" , {
                        required:true,
                        validate : {
                            matchPassword : (passwordConfirm) => {
                                const {password} = getValues();
                                console.log(password, passwordConfirm, password === passwordConfirm)
                            }
                        }
                    })} />
                    {errors && errors?.email?.type === "matchPassword" && (
                        <p>비밀번호가 일치하지 않습니다.</p>
                    )}
                </label>
                <div>
                    <p>취미</p>
                    <label>
                        <input type="checkbox" name="hobbies" value={"soccer"}  
                            {...register("hobbies")}/>
                        <span>축구</span>
                    </label>
                    <label>
                        <input type="checkbox" name="hobbies" value={"baseball"} 
                            {...register("hobbies")} />
                        <span>야구</span>
                    </label>
                    <label>
                        <input type="checkbox" name="hobbies" value={"basketball"} 
                            {...register("hobbies")}/>
                        <span>농구</span>
                    </label>
                </div>
                <button disabled={isSubmitting}>회원가입</button>
            </form>
        </div>
    );
};

export default SignUp;