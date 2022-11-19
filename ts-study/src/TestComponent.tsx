import React, { useState } from 'react'

interface Props { 
    text: string;
}
interface UserData {
    id: number;
    name: string;
}

const TestComponent: React.FC<Props> = (props) => {

    const [count, setCount] = useState<number | null>();
    const [user, setUser] = useState<UserData>({
        id: 1,
        name:'yirii'
    });
    const [inputData, setInputData] = useState('');
    
    const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => { 
        setInputData(e.target.value);
    }

  return (
    <div>
          <h1>{props.text}</h1>
          <h1>{count}</h1>
          <div>
              <input type="text" value={inputData} onChange={handleInputChange} />
              <h1>{inputData}</h1>
          </div>
    </div>
  )
}

export default TestComponent
