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
                <a href={url} rel="noreferrer" target="_blank">
                    {url}
                </a>
            </LinkDashboardData>
            <LinkDashboardButtons>
                <button onClick={()=>openModel(link)}>🖊️</button>
            </LinkDashboardButtons>
        </LinkDashboardContainer>
    );
};

export default LinkDashboard;
