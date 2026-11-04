
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import infinitePLogo from '../assets/images/logo1.png'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState<string | null>(null)

    const location = useLocation()

    useEffect(() => {
        if (location.pathname !== '/') {
        setActiveSection(null)
        return
        }

        const updateActiveSection = () => {
        const about = document.getElementById('about')
        const contact = document.getElementById('contact')

        if (!about || !contact) return

        const scrollPosition = window.scrollY + window.innerHeight * 0.35

        if (scrollPosition >= contact.offsetTop) {
            setActiveSection('contact')
        } else if (scrollPosition >= about.offsetTop) {
            setActiveSection('about')
        } else {
            setActiveSection(null)
        }
        }

        updateActiveSection()

        window.addEventListener('scroll', updateActiveSection)

        return () => {
        window.removeEventListener('scroll', updateActiveSection)
        }
    }, [location.pathname])

    return (
        <div className="bg-navbar text-navbar-text">
            <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
                <NavLink
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-semibold tracking-tight"
                >
                    <img
                        src={infinitePLogo}
                        alt="Pankhuri Priya"
                        className="h-11 w-auto object-contain"
                        />
                </NavLink>

                {/* Desktop navigation */}
                
                <div className="hidden items-center gap-8 text-sm font-medium md:flex">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive
                            ? 'text-navbar-active font-semibold'
                            : 'transition-colors hover:text-navbar-hover'
                    }
                >
                    HOME
                </NavLink>

                    <Link
                        to="/#about"
                        className={`transition-colors hover:text-navbar-hover ${
                            activeSection === 'about'
                            ? 'text-navbar-active font-semibold'
                            : ''
                        }`}
                    >
                        ABOUT
                    </Link>

                    <NavLink
                        to="/background"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-navbar-active font-semibold'
                                : 'transition-colors hover:text-navbar-hover'
                        }
                    >
                        BACKGROUND
                    </NavLink>

                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                                isActive
                                    ? 'text-navbar-active font-semibold'
                                    : 'transition-colors hover:text-navbar-hover'
                            }
                    >
                        PROJECTS
                    </NavLink>

                    <Link
                        to="/#contact"
                        className={`transition-colors hover:text-navbar-hover ${
                            activeSection === 'about'
                            ? 'text-navbar-active font-semibold'
                            : ''
                        }`}
                    >
                        CONTACT
                    </Link>
                </div>


                {/* Mobile menu button */}
                <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
                    onClick={() => setIsMenuOpen(prev => !prev)}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    >
                    {isMenuOpen ? (
                        <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        aria-hidden="true"
                        >
                        <path d="M6 6L18 18M18 6L6 18" />
                        </svg>
                    ) : (
                        <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        aria-hidden="true"
                        >
                        <path d="M4 7H20M4 12H20M4 17H20" />
                        </svg>
                    )}
                </button>

                {/* Mobile navigation */}
                {isMenuOpen && (
                <div
                    id="mobile-navigation"
                    className="absolute top-full right-0 left-0 z-10 flex flex-col gap-5 bg-navbar px-6 py-6 text-sm font-medium text-navbar-text shadow-md md:hidden"
                >
                    <NavLink to="/" end onClick={() => setIsMenuOpen(false)}>
                    Home
                    </NavLink>
                    <NavLink
                    to="/#about"
                    onClick={() => setIsMenuOpen(false)}
                    >
                    About
                    </NavLink>
                    <NavLink
                    to="/background"
                    onClick={() => setIsMenuOpen(false)}
                    >
                    Background
                    </NavLink>

                    <NavLink
                    to="/projects"
                    onClick={() => setIsMenuOpen(false)}
                    >
                    Projects
                    </NavLink>

                    <NavLink
                    to="/#contact"
                    onClick={() => setIsMenuOpen(false)}
                    >
                    Contact
                    </NavLink>

                </div>
                )}
            </nav>
        </div>
  )
}

export default Navbar
