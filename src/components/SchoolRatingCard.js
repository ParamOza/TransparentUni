import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const SchoolRatingCard = ({ data }) => {
    return (
        <Container>
            <div class="container card m-2">
                <div class="row">
                    <div class="py-1 border col-sm">
                        <h2 class = "m-0"><a class = "paths" href = {data.office}>{data.school}</a></h2>
                    </div>
                    <div class="py-1 border col-sm">
                        <h2 class = "m-0">{data.numberOfRankings} {data.numberOfRankings == 1 ? "Rating" : "Ratings"} From Alumni and Students</h2>
                    </div>
                    <div class="py-1 border col-sm">
                        <h2 class = "m-0">Rated On Average As {data.average}/10</h2>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default SchoolRatingCard;
