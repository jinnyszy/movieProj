import { Component } from "react";
import { Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

class CardList extends Component {

    render() {
        const { list } = this.props;
        console.log('list', list)
        return (
            <div className="flex items-center justify-center">
                <div className="w-4/5">
                    <h1 className="text-2xl font-bold mb-4">Movies </h1>
                    <a href={`/movies`} className="text-blue-500 hover:underline"> view more  </a>
                    <div className="grid grid-cols-8 gap-4">
                        {list
                            ? list.slice(0, 8).map((item) => (
                                <div key={item.id}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                        alt={item.title}
                                        className="w-full h-96 object-cover rounded-lg"
                                    />
                                    <Link to={`/movies/${item.id}`} className="text-blue-500 hover:underline"> {item.title} </Link>
                                </div>
                            ))
                            : <ErrorBoundary errorMsg={<h2>haha error</h2>} />
                        }
                    </div>
                </div>
            </div>
        );
    }

};

// function DetailsErrorBoundary() {
//     return (
//         <ErrorBoundary errorMsg={<h2>haha error</h2>}>
//             <Carousel />
//         </ErrorBoundary>
//     );
// }

export default CardList;
