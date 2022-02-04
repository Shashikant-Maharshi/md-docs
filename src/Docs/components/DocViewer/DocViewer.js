import React from 'react';

const DocViewer = () => (
  <div className='docs__viewer | flex flex-row flex-x-center'>
    <div className="docs__viewer__page | flex flex-col">
      <h2>Page Title</h2>
      <p>
        React is defined as a JavaScript library for building user interfaces. Let’s start by talking about the two different parts of this definition.
        React is a JavaScript “library”. It is not exactly a “framework”. It is not a complete solution and you will often need to use more libraries with
        React to form any solution. React does not assume anything about the other parts in any solution.
        Frameworks serve a great purpose, especially for young teams and startups. When working with a framework, many smart
        design decisions are already made for you, which gives you a clear path to focus on writing good application-level logic.
        However, frameworks come with some disadvantages. For experienced developers working on large codebases, these disadvantages are sometimes
        a deal breaker.
        Frameworks are not flexible, although some claim to be. A framework usually wants you to code everything a certain way. If you try to deviate from
        that way, the framework usually ends up fighting you about it. Frameworks are also usually large and full of features. If you need to use only
        a small piece of them, you have to include the whole thing anyway. Admittedly, this point is changing today but it is still not ideal.
        Some frameworks are going modular, which I think is great, but I am a big fan of the pure Unix philosophy:
Write programs that do one thing and do it well. Write programs to work together.
— Doug McIlroy
        React follows the Unix philosophy because it is a small library that focuses on just one thing and on doing that thing extremely well.
        That “one thing” is the second part of the React’s definition: Building User Interfaces.
        A User Interface (UI) is anything we put in front of users to have them interact with a machine. UIs are everywhere, from the simple buttons
        on a microwave to the dashboard of a space shuttle. If the device we are trying to interface can understand JavaScript, we can use
        React to describe a UI for it. Since Web browsers understand JavaScript, we can use React to describe Web UIs.
        I like to use the word describe here because that is what we basically do with React. We just tell it what we want! React will then build the actual UI,
        on our behalf, in the Web browser. Without React or similar libraries, we would need to manually build UIs with native Web APIs and JavaScript
        and that is not as easy.
        When you hear the statement that “React is declarative” this is exactly what it means. We describe UIs with React and tell it what we want
        (not how to do it). React will take care of the “how” and translate our declarative descriptions (which we write in the React language)
        to actual UIs in the browser. React shares this simple declarative power with HTML itself, but with React we get to be declarative for
        HTML UIs that represent dynamic data, not just static data.
        When React was released, there was a lot of buzz about its performance because it introduced the smart idea of a virtual DOM that can be used to
        reconcile the actual DOM (and we’ll talk about that in the next section).
        DOM is “Document Object Model”. It’s the browsers’ programming interface for HTML (and XML) documents that treats them as tree structures.
        The DOM API can be used to change a document structure, style, and content.
        While React’s performance is still one of the most important reasons why it is extremely popular today, I don’t classify it as the “best” thing about it.
        think React was a game changer because it created a common language between developers and browsers that allows developers to declaratively
        describe UIs and manage actions on their state instead of actions on their DOM elements. It’s simply the language of user interface “outcomes”.
        Instead of coming up with steps to describe actions on interfaces, developers just describe the interfaces in terms of a “final” state
        (like a function). When actions happen to that state, React takes care of updating the UIs in the DOM based on that
        (and it does that efficiently as we’ll see next).
        If someone asked you to give one reason why React is worth learning, this outcomes-based UI language is it. I call this language
        “the React language”.
        This todos array is the starting state of your UI. You’ll need to build a UI to display them and manage them.
        The UI will have a form to add new TODOs, a way for you to mark a TODO as complete, and a way to remove all completed TODOs.
      </p>
    </div>
  </div>
);

export default DocViewer;
