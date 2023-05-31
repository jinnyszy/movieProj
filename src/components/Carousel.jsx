import { Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

const Carousel = (props) => {
    const { list } = props;
    console.log('list', list)

    const truncateText = (text, limit) => {
        if (text.length <= limit) {
            return text;
        }
        return text.slice(0, limit).concat('...');
    }

    return (
        <div className="flex items-center justify-center">
            <div className="w-4/5">
                <h1 className="text-2xl font-bold mb-4">Now Showing</h1>
                <div className="flex space-x-4 overflow-x-auto">
                    {list
                        ? list.map((item) => (
                            <div key={item.id} className="w-auto">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                    alt={item.title}
                                    className="w-full h-96 object-cover rounded-lg"
                                />
                                <h2 className="text-lg font-bold mt-2">{item.title}</h2>
                                <p className="text-gray-500">{item.release_date}</p>
                                <p className="mt-2">{truncateText(item.overview, 50)}</p>
                                <Link to={`/movies/${item.id}`} className="text-blue-500 hover:underline"> Read More </Link>
                            </div>
                        ))
                        : <ErrorBoundary errorMsg={<h2>haha error</h2>} />}
                </div>
            </div>
        </div>
    );
};

// function DetailsErrorBoundary() {
//     return (
//         <ErrorBoundary errorMsg={<h2>haha error</h2>}>
//             <Carousel />
//         </ErrorBoundary>
//     );
// }

export default Carousel;
