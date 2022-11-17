import MoreArticlesItem from '@components/MoreArticlesItem'

const moreArticles = [
  {
    name: 'James Tombs',
    title: 'Integer eu magna sit amet metus fermentum.',
    authorImg: 'james-t.jpeg',
    articleImg: 'blank_img.png'
  },
  {
    name: 'James Tombs',
    title: 'Integer eu magna sit amet metus fermentum.',
    authorImg: 'james-t.jpeg',
    articleImg: 'blank_img.png'
  },
  {
    name: 'James Tombs',
    title: 'Integer eu magna sit amet metus fermentum.',
    authorImg: 'james-t.jpeg',
    articleImg: 'blank_img.png'
  },
  {
    name: 'James Tombs',
    title: 'Integer eu magna sit amet metus fermentum.',
    authorImg: 'james-t.jpeg',
    articleImg: 'blank_img.png'
  }
]


export default function MoreArticles() {
  return (
    <>
      <div id="moreArticles" className="mb-8">
          <div className="text-gray-600 font-bold mb-8">
            More from James
          </div>
          <div id="moreArticlesItems">
          { moreArticles.map(({ name, title, authorImg, articleImg }) => (
            <MoreArticlesItem
              name={name}
              title={title}
              authorImg={authorImg}
              articleImg={articleImg}
            />
          ))}
            
          </div>
      </div>
    </>
  )
}