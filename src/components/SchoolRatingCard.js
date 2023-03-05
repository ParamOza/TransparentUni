import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Body = ({data}) => {
    return (
        <Container>
            <div class="m-2">
                <div class="container border rounded my-auto">
                    <div class="row">
                        <div class="py-3 border col-sm">
                            <h2>{data.school}</h2>
                        </div>
                        <div class="py-3 border col-sm">
                            <h2>{data.numberOfRankings} Ratings</h2>
                        </div>
                        <div class="py-3 border col-sm">
                            <h2>Average {data.average}/10</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Body;
