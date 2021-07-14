import { useEffect, useState } from "react"
import { Container, Figure, Row } from "react-bootstrap"

const SingleCard = () => {
  const [data, setData] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      let resp = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=2e5917b3"
      )
      let movies = await resp.json()
      setData(movies)
    }
    fetchData()
  }, [])
  console.log(data)

  return (
    <Container>
      <Row>
        {/* {data.map((oneMovie) => (
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={data.img}
            />
            <Figure.Caption>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </Figure.Caption>
          </Figure>
        ))} */}
      </Row>
    </Container>
  )
}
export default SingleCard
