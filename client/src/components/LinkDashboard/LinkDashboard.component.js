import axios from 'axios';
import authService from '../../services/auth.service';
import {
    LinkDashboardContainer,
    LinkDashboardData,
    LinkDashboardButtons,
} from './LinkDashboard.style';

const LinkDashboard = ({ link, openModel }) => {
    const { name, url } = link;

  

    return (
        <LinkDashboardContainer>
            <LinkDashboardData>
                <p>{name}</p>
                <a href={url} target="_blank">
                    {url}
                </a>
            </LinkDashboardData>
            <LinkDashboardButtons>
                <button onClick={openModel}>🖊️</button>
            </LinkDashboardButtons>
        </LinkDashboardContainer>
    );
};

export default LinkDashboard;
