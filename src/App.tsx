import { Button } from "@/components/ui/button"
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";
import { Navbar01 } from '@/components/ui/shadcn-io/navbar-01';

function App() {
  const { login, register, isAuthenticated, logout } = useKindeAuth();
  return (
    <div className="flex flex-col items-center justify-between w-screen h-screen">
      <Navbar01 />
      <Button onClick={() => console.log(import.meta.env.VITE_KINDE_CLIENT_ID)} type="button">Click me</Button>
      {isAuthenticated ? 
        <Button onClick={() => logout()} type="button">Log Out</Button> :
        <>
          <Button onClick={() => register()} type="button">Register</Button>
          <Button onClick={() => login()} type="button">Log In</Button>
        </>
      }
    </div>
  )
}

export default App
