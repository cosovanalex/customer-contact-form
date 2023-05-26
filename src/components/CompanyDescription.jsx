const companyDescription = {
    description:
    "We are on a mission to make beauty more accessible, because everyone deserves to know they are pretty.💖\nHave you ever been disappointed by nail polish or a nail salon?\n We have.\n After countless hours spent sitting in nail salons being poked and prodded, spending hundreds of dollars, and chipping nails an hour after leaving the salon - we’d had enough.\n There had to be a better option.\n There had to be another way, something that left us with smiles on our faces and gorgeous nails that were tough enough to keep up with our lives.\n After searching far and wide and leaving no nail product untested, we found a way to combine age-old art with new-age technology to create beautiful nail wraps that are easy to put on and are as tough as, well… nails!\n We created Lily & Fox to share this with you. Because we believe that having beautiful nails should be simple. Because we believe that you should be able to look after your nails without needing an entire episode of The Kardashians.\n Simple, so that we can all have gorgeous nails, all the time."
};

const paragraphs = companyDescription.description.split('\n').map((paragraph, index) => <p key={index}>{paragraph}</p>);

export {
    paragraphs
}
