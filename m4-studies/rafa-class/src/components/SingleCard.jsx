import { useEffect, useState } from "react"
import { Col, Container, Figure, Row } from "react-bootstrap"

const SingleCard = ({ pizza }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let resp = await fetch("http://www.omdbapi.com/?apikey=2e5917b3&s=horror")
      let movies = await resp.json()
      setData(movies.Search)
    }
    fetchData()
  }, [])
  console.log(data)

  return (
    <Container>
      <Row className="justify-content-center">
        {data
          .filter(
            (movie) =>
              movie.Title.toLowerCase().indexOf(pizza.toLowerCase()) !== -1
          )
          .map((oneMovie) => (
            <Col md={4}>
              <Figure key={oneMovie.imdbID}>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={oneMovie.Poster}
                />
                <Figure.Caption>
                  <h4>{oneMovie.Title}</h4>
                  {oneMovie.Plot}
                </Figure.Caption>
              </Figure>
            </Col>
          ))}
      </Row>
    </Container>
  )
}
export default SingleCard
