
import Menu from './header/menu';
import Home from './header/home';
import Profile from './header/profile';

export default function Header(props) {

    return (
      <header className={props.className}>
        <ul className="flex items-center justify-between py-[30px]">
          <li className="">
            <Menu/>
          </li>
          <li className="">
            <Home/>
          </li>
          <li className="">
            <Profile/>
          </li>
        </ul>
      </header>
    )
  }
  