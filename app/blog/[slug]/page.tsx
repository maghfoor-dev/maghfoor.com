import { client } from "@/utils/sanityClient";
import { Metadata } from "next";
import { groqQueries } from "@/utils/groqQueries";
import PortableText from "react-portable-text";
import { RichTextComponents, urlFor } from "@/components/RichTextComponents";
import Image from "next/image"
import "../../../styles/post.scss"
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { groq } from "next-sanity";

interface PostPageProps {
    params: {
        slug: string;
    }
}

export const revalidate = 86400;

export async function generateStaticParams() {
    const query = groq`*[_type=='post']
    {
        slug
    }`;

    const slugs = await client.fetch(query)
    const slugRoutes = slugs.map((slug: any) => slug.slug.current)

    return slugRoutes.map((slug: any) => ({
        slug: slug
    }))
}

export async function generateMetadata({ params: { slug } }: PostPageProps): Promise<Metadata> {

    const blogPost = await client.fetch(groqQueries.getPost, { slug })
    return ({
        title: blogPost.title,
        description: "This blog is written by Maghfoor Ahmed."
    })

}

export default async function PostPage({ params: { slug } }: PostPageProps) {
    const blogPost = await client.fetch(groqQueries.getPost, { slug });
    return (
        <div>
            <NavBar href="/blog" />
            <section className="post-section">
                {blogPost.mainImage &&
                    <div className="main-image-div">
                        <Image src={urlFor(blogPost.mainImage.asset).url()} alt="Main Image" fill className="main-image" />
                    </div>}
                <p>Published: {new Date(blogPost.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                <article>
                    <PortableText content={blogPost.body} serializers={RichTextComponents} />
                </article>
            </section>
            <Footer />
        </div>
    )
}