import { Component } from "react"

class DetailsLayout extends Component {
    state = {

    }
    render() {
        const {
            backgroundImage,
            posterImage,
            title,
            release_date,
            vote_average,
            overview
        } = this.props;
        return (
            <div className="bg-black">
                <div className="h-96 bg-cover bg-center" style={{ backgroundImage }}>
                    <div className="flex justify-center items-center h-full">
                        <div className="max-w-4xl px-4">
                            <div className="flex justify-between">
                                <div className="flex items-center">
                                    <img src={posterImage} alt={title} className="w-48 rounded-lg shadow-lg" />
                                    <div className="ml-4">
                                        <h1 className="text-4xl font-bold text-white">
                                            {title}
                                        </h1>
                                        <p className="text-lg text-gray-300">
                                            {release_date}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-2xl text-white font-bold">
                                            {vote_average}
                                        </span>
                                        <span className="text-gray-300">/10</span>
                                    </div>
                                    <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded">
                                        Add to Watchlist
                                    </button>
                                </div>
                            </div>
                            <div className="mt-8">
                                <h2 className="text-2xl font-bold text-white">Overview</h2>
                                <p className="text-gray-300 mt-2">
                                    {overview}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default DetailsLayout 