import { PropsWithChildren,createContext } from 'react'
import './app.less'


export const TestContext = createContext(0)

export default function App(props:PropsWithChildren) {
  return (
    <TestContext.Provider value={1}>
        {props.children}
    </TestContext.Provider>
  )
}
