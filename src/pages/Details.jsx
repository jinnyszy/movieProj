// import { useState, useContext } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// //import Carousel from "./Carousel";
// import fetchStuff from "../utilities/fetchStuff";
// import ErrorBoundary from "../components/ErrorBoundary";
// //import Modal from "./Modal";
// //import AdoptedPetContext from "./AdoptedPageContext";

// const Details = () => {
//     const { id } = useParams();
//     const [showModal, setShowModal] = useState(false); sssss
//     const navigate = useNavigate();
//     // eslint-disable-next-line no-unused-vars
//     //const [_, setAdoptedPet] = useContext(AdoptedPetContext);
//     //fetchPet if id does not exist in cache
//     const results = useQuery(["details", id], fetchStuff);

//     if (results.isLoading) {
//         return (
//             <div className="loading-pane">
//                 <h2 className="loader">🎃</h2>
//             </div>
//         )
//     }

//     const movies = results?.results[0]

//     return (
//         <div className="details">
//             {/* <Carousel images={movies.images} /> */}
//             <div>
//                 <h1>{movies.title}</h1>
//                 <h2>{movies.popularity} - {movies.vote_average},{movies.vote_count}</h2>
//                 <button onClick={() => setShowModal(true)}>Adopt</button>
//                 <p>{movies.overview}</p>
//                 {/* {
//                     showModal ? (
//                         <Modal>
//                             <div>
//                                 <h1>Would you like to adopt {movies.name}?</h1>
//                                 <div className="buttons">
//                                     <button onClick={() => {
//                                         setAdoptedPet(pet);
//                                         navigate("/");
//                                     }}>YES</button>
//                                     <button onClick={() => setShowModal(false)}>NO</button>
//                                 </div>
//                             </div>
//                         </Modal>
//                     ) : null
//                 } */}
//             </div>
//         </div>
//     )
// };

// function DetailsErrorBoundary() {
//     return (
//         <ErrorBoundary errorMsg={<h2>haha error</h2>}>
//             <Details />
//         </ErrorBoundary>
//     )
// }

// export default DetailsErrorBoundary;