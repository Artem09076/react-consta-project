import './News.css'

type Dictionary<T> = {
    [key: string]: T;
};

const News = ({ data }: { data: Dictionary<string> }) => {
    return (
        <div className="block-wrapper">
            <div className="text-block">
                <h3 className="text-block__title">{data.name}</h3>
                <p className="text-block__description">
                    {data.description}
                </p>
            </div>
        </div>
    );
};

export default News;
