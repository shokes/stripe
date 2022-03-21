import { useGlobalContext } from './Context'

const Submenu = function () {
  const { isSubmenuOpen, location } = useGlobalContext()
  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}>
      submenu
    </aside>
  )
}

export default Submenu
