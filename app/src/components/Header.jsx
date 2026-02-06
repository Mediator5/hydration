const menus = [
    {
        id: 'home',
        name: 'home',
        link: 'home'
    },
    {
        id: 'about',
        name: 'about',
        link: 'about'
    },
    {
        id: 'services',
        name: 'services',
        link: 'services'
    },
    {
        id: 'contact',
        name: 'contact us',
        link: 'booking'
    },
]

export default function Header() {
    return (
        <header className="flex justify-between items-center px-5 py-3 bg-white shadow-md">
            {/* <div className="text-xl font-serif font-bold text-gray-700">
                Hydration Solution
            </div> */}
            <img className="w-96" src="https://caleblaw.io/wp-content/uploads/2026/02/Hydration-Solution-Logo-alternate2.png" alt="logo" />
            <nav className="flex space-x-6">
                {
                    menus.map((menu) => (
                        <a key={menu.id} href={`#${menu.link}`} className="text-gray-600 hover:text-amber-800 font-semibold text-sm uppercase transition duration-300 font-sans">{menu.name}</a>
                    ))
                }

            </nav>

            <a href="#booking" className="bg-teal hover:bg-ocean text-white  py-3 px-6 rounded shadow-lg flex items-center transition duration-300 font-sans">
                BOOK AN IV NOW →
            </a>
        </header>
    );
}



