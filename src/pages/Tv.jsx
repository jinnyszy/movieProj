import { useFetchTVSeriesQuery } from '../utilities/slice';
import CardList from '../components/CardList';
const Tv = () => {
  const { data: tv, total_pages: totalPages } =
    useFetchTVSeriesQuery(currentPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <CardList
      list={tv}
      listPages={totalPages}
      currentPage={currentPage}
      handlePageChange={handlePageChange}
    />
  );
};
export default Tv;
