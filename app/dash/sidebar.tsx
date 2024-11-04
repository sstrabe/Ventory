'use client';

import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState } from "react"
import { FaBeer, FaUsers, FaChalkboardTeacher, FaUser, FaPowerOff, FaBars } from "react-icons/fa"

export default function Sidebar() {
    const pathname = usePathname().split('/').slice(-1)[0]
    const [active, setActive] = useState(pathname)
    const [opened, setOpen] = useState('opened')

    return (
        <nav className="z-50">
            <div className={`fixed top-0 left-[${opened === 'opened' ? "4rem" : "0"}] w-16 h-16 flex flex-col text-secondary shadow-lg z-40 scale-100`}>
                <Hamburger icon={<FaBars />} onClick={() => {
                    setOpen(opened === 'opened' ? 'scale-0' : 'opened')
                }} />
            </div>
            <div className={`fixed top-0 left-0 h-[50vh] w-16 flex flex-col bg-primary text-secondary shadow-lg z-50 ${opened}`}>
                <SidebarIcon icon={<FaBeer size="20" />} tooltip='Dashboard' href="/" active={active} name="dash" onClick={() => { setActive('dash') }} />
                <SidebarIcon icon={<FaChalkboardTeacher size="20" />} tooltip='Classes' href="/dash/classes" active={active} name="classes" onClick={() => { setActive('classes') }} />
                <SidebarIcon icon={<FaUsers size="20" />} tooltip='User Management' href="/dash/users" active={active} name="users" onClick={() => { setActive('users') }} />
            </div>

            <div className={`fixed bottom-0 left-0 h-[50vh] w-16 flex flex-col-reverse bg-primary text-secondary shadow-lg z-50 ${opened}`}>
                <UserMenu icon={<FaUser size="20" />} active={active} name="user" onClick={() => active === 'user' ? setActive(pathname) : setActive('user')} />
            </div>
        </nav>
    )
}

interface SidebarIcon extends UserMenu {
    tooltip: string, href: string,
}

const SidebarIcon = ({ icon, tooltip = 'Tooltip', href, active, onClick, name }: SidebarIcon) => (
    <Link className={`sidebar-icon group ${active === name ? 'focused' : ''}`} href={href} onClick={onClick}>
        {icon}

        <span className={`sidebar-tooltip group-hover:scale-100`}>{tooltip}</span>
    </Link>
)

interface UserMenu {
    icon: React.JSX.Element, onClick: () => void,
    name: string, active: string
}

const UserMenu = ({ icon, active, onClick, name }: UserMenu) => {
    return (
        <button className={`sidebar-icon group ${active === name ? 'focused' : ''}`} onClick={() => { onClick() }}>
            {icon}

            <div className={`sidebar-menu group-[.focused]:scale-100`}>
                <Link href="/api/auth/logout" className="py-1 flex items-center"><FaPowerOff size="12" /><span className="ml-2">Logout</span></Link>
            </div>
        </button>
    )
}

interface Hamburger {
    icon: React.JSX.Element, onClick: () => void,
}

const Hamburger = ({ icon, onClick }: Hamburger) => (
    <button className={`sidebar-icon group`} onClick={onClick}>
        {icon}
    </button>
)