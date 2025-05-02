function FinishScreen({points, maxPossiblePoint, highscore, dispatch}) {
    const percetnage = (points / maxPossiblePoint) * 100;
    
    let emoji;
    if (percetnage === 100) emoji = '🥇';
    if (percetnage >= 80 && percetnage < 100) emoji = '🎉';
    if (percetnage >= 50 && percetnage < 80) emoji = '🙃';
    if (percetnage >= 0 && percetnage < 50) emoji = '😐';
    if (percetnage >= 0) emoji = '🤦‍♂️';
    
    return (
        <>
            <p className="result">
                <span>{emoji}</span> You scored <strong>{points}</strong> out
                of {maxPossiblePoint} ({Math.ceil(percetnage)}%)
            </p>
            <p className="highscore">(Highscore: {highscore} points)</p>
            <button
                className="btn btn-ui"
                onClick={() => dispatch({type: 'restart'})}
            >
                Restart quiz
            </button>
        </>
    );
}

export default FinishScreen;
