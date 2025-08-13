import A from "./A";

const CharContext = () => {
    const name = "홍길동";

    return (
        <div>
            <CharContext.Povider >
                <A name={name} />
            </CharContext.Povider>
        </div>
    )
}