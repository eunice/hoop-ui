import Link from 'next/link';

function getProjects() {
    return [
        {id: "team-1", title: "Team 1"},
        {id: "team-2", title: "Team 2"},
        {id: "team-3", title: "Team 3"}
    ]
}

function getSideBarItems() {
    return [
        {id: "sidebar-all", title: "All"},
        {id: "sidebar-starred", title: "Starred"},
        {id: "sidebar-drafts", title: "Drafts"},
        {id: "sidebar-released", title: "Released"},
        {id: "sidebar-pending", title: "Pending"},
        {id: "sidebar-onhold", title: "On Hold"}
    ]
}

const SideBarItem = ({item}) => (
    <Link href="/">
        <a className="flex items-center px-4 py-1 text-gray-600 active:bg-white active:border-l-2 border-l-4 border-transparent hover:border-blue-600 hover:bg-white font-medium leading-loose">{item.title}</a>
    </Link>
)

const SideBar = () => (
    <div id="sidebar" className="w-1/4 p-4 bg-gray-100 h-screen overflow-auto ">
        <div className="relative sidebar-inner">
        {getSideBarItems().map(item => (
          <SideBarItem key={item.id} item={item} />
        ))}
        </div>
    </div>
);

export default SideBar;