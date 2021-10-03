import React, { useState, useRef } from 'react';

function InputSample() {

    const [inputs,setInputs] = useState({
        name: '',
        nickname: ''
    });

    const {name, nickname} = inputs;

    const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
    };

    console.log(inputs)

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                이름 (닉네임)
            </div>
        </div>
    );
}

export default InputSample;