import React, { Component } from 'react';

class SideMenuLayout extends Component {
    constructor(props) {
        super(props);

        this.state = {}

    }

    render() {
        return(
            <aside className="h-full absolute right-0 bg-gray-600 m-auto">
                <div>SOME CONTENT BLABLA </div>
            </aside>
        )
    }
}

export default SideMenuLayout;