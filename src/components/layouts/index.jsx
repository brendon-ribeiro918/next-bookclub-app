
import Header from './header'
import Footer from './footer'

export default function Layouts(props) {

   // Access the child component
   const child = props.children;

   const className = props.className;

  return (
    <>
      <Header className={className}/>
      {child}
      <Footer className={className}/>
    </>
  )
}
