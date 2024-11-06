export default function articlePost({ params }) {
    return (
        <>
            <h1>blog post</h1>
            <p>{params.slug}</p>
        </>
    )
}