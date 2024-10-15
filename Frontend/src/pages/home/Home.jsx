import Header from '../../components/Header/Header'
import ListOfProducts from '../../components/ListOfProducts/ListOfProducts'
import useProducts from '../../hooks/useProducts'

export default function Home () {
  const { filterProducts } = useProducts()

  return (
    <>
      <Header />
      <ListOfProducts products={filterProducts} />
    </>
  )
}
