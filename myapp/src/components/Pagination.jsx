import Pagination from 'react-bootstrap/Pagination';
import { useState } from 'react';
function Paginationn() {
    const [activePage, setActivePage] = useState(11);
    let items = [];
    for (let number = 1; number <= 8; number++) {
        items.push(
            <Pagination.Item key={number} active={number === activePage} onClick={() => setActivePage(number)}>
                {number}
            </Pagination.Item>
        );
    }

    return (
        <> 
            <p>active page:{activePage}</p>
            <br />
            <Pagination>

                {/* First */}
                <Pagination.First
                    onClick={() => setActivePage(1)}
                />

                {/* Previous */}
                <Pagination.Prev
                    onClick={() =>
                        activePage > 1 &&
                        setActivePage(activePage - 1)
                    }
                />

                {/* Page Numbers */}
                {items}

                {/* Next */}
                <Pagination.Next
                    onClick={() =>
                        activePage < 8 &&
                        setActivePage(activePage + 1)
                    }
                />

                {/* Last */}
                <Pagination.Last
                    onClick={() => setActivePage(8)}
                />

            </Pagination>
        </>);
}

export default Paginationn;