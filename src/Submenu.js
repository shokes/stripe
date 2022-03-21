import { useGlobalContext } from './Context'

const Submenu = function () {
  const data = useGlobalContext()
  console.log(data)
  return <h2>submenu component</h2>
}

export default Submenu
