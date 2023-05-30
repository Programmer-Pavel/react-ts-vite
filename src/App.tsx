import { useEffect, useState } from "react";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

function App() {
    const [items, setItems] = useState<Post[]>([]);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        if (items.length >= 100) {
            setHasMore(false);
        }

        (async () => {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
            );
            const data: Post[] = await res.json();
            setItems([...items, ...data]);
        })();
    }, [page]);

    const fetchData = () => {
        setPage(page + 1);
    };

    return (
        <div
            style={{
                width: "800px",
                height: "500px",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#F0F8FF",
                padding: "20px",
                overflow: "auto",
            }}
            id="scrollableDiv"
        >
            <InfiniteScroll
                dataLength={items.length}
                next={fetchData}
                hasMore={hasMore}
                loader={<h4>Загрузка...</h4>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Постов больше нет!</b>
                    </p>
                }
                scrollableTarget="scrollableDiv"
            >
                {items.map((item) => {
                    return (
                        <div
                            style={{
                                border: "1px solid black",
                                width: "700px",
                            }}
                            key={item.id}
                        >
                            <h3>
                                {item.id}) {item.title}
                            </h3>
                            <p>{item.body}</p>
                        </div>
                    );
                })}
            </InfiniteScroll>
        </div>
    );
}

export default App;
