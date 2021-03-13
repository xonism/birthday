import { domElements$ } from './dom-elements-object.js';

function toggleAnimationClass ( element$, number ) {
    element$.classList.toggle(`animation-${number}`);
}

function makeElementsAppear ( elements$ ) {
    elements$.forEach( el$ => el$.style.display = 'inline' )
}

function makeElementsDisappear ( elements$ ) {
    elements$.forEach( el$ => el$.style.display = 'none' )
}

setTimeout( function () {
    makeElementsDisappear( [ domElements$.schnitzel.spinning, domElements$.welcomeTitle ] );

    domElements$.songs.instrumental.play();

    makeElementsAppear( [ domElements$.bankGrandpa, domElements$.chowder.pleading, domElements$.chatBubbles.first ] );

    toggleAnimationClass( domElements$.bankGrandpa, 0 );
    toggleAnimationClass( domElements$.chowder.pleading, 0 );
    toggleAnimationClass( domElements$.chatBubbles.first, 175 );
}, 6000 );

domElements$.chatBubbles.first.addEventListener( "click", function () {
    domElements$.sounds.click.play();

    makeElementsDisappear( [ domElements$.chatBubbles.first ] );

    makeElementsAppear( [ domElements$.chatBubbles.second ] );
} )

domElements$.chatBubbles.second.addEventListener( "click", function () {
    domElements$.sounds.click.play();

    makeElementsDisappear( [ domElements$.chatBubbles.second ] );

    makeElementsAppear( [ domElements$.chatBubbles.third ] );
} )

domElements$.chatBubbles.third.addEventListener( "click", function () {
    domElements$.sounds.click.play();

    makeElementsDisappear( [ domElements$.chatBubbles.third ] );

    makeElementsAppear( [ domElements$.chatBubbles.fourth ] );
} )

domElements$.chatBubbles.fourth.addEventListener( "click", function () {
    domElements$.sounds.click.play();

    makeElementsDisappear( [ domElements$.chatBubbles.fourth, domElements$.bankGrandpa, domElements$.chowder.pleading ] );

    confetti.start();
    domElements$.sounds.roasted.play();

    makeElementsAppear( [ domElements$.chowder.roasted, domElements$.chatBubbles.fifth ] );
} )

domElements$.chatBubbles.fifth.addEventListener( "click", function () {
    domElements$.sounds.click.play();
    
    makeElementsDisappear( [ domElements$.chowder.roasted, domElements$.chatBubbles.fifth ] );

    confetti.stop();

    setTimeout( function () {
        makeElementsAppear( [ domElements$.cryingOnion, domElements$.chatBubbles.sixth ] );

        toggleAnimationClass( domElements$.cryingOnion, 50 );
        toggleAnimationClass( domElements$.chatBubbles.sixth, 375 );
    }, 4000 )
} )

domElements$.chatBubbles.sixth.addEventListener( "click", function () {
    domElements$.sounds.click.play();

    makeElementsDisappear( [ domElements$.chatBubbles.sixth ] );

    makeElementsAppear( [ domElements$.chatBubbles.seventh ] );
} )

domElements$.chatBubbles.seventh.addEventListener( "click", function () {
    domElements$.sounds.click.play();

    makeElementsDisappear( [ domElements$.cryingOnion, domElements$.chatBubbles.seventh ] );

    makeElementsAppear( [ domElements$.chatBubbles.eighth, domElements$.schnitzel.surprised, domElements$.presentButtons.first ] );

    domElements$.sounds.angel.play();
    
    toggleAnimationClass( domElements$.chatBubbles.eighth, 400 );
    toggleAnimationClass( domElements$.schnitzel.surprised, 0 );
    toggleAnimationClass( domElements$.presentButtons.first, 375 );
} )

domElements$.presentButtons.first.addEventListener( "click", function () {
    domElements$.sounds.pop.play();

    makeElementsDisappear( [ domElements$.chatBubbles.eighth, domElements$.schnitzel.surprised, domElements$.presentButtons.first ] );

    makeElementsAppear( [ domElements$.chatBubbles.ninth, domElements$.schnitzel.shocked, domElements$.presentButtons.second ] );

    toggleAnimationClass( domElements$.chatBubbles.ninth, 400 );
    toggleAnimationClass( domElements$.schnitzel.shocked, 0 );
    toggleAnimationClass( domElements$.presentButtons.second, 150 );
} )

domElements$.presentButtons.second.addEventListener( "click", function () {
    domElements$.sounds.pop.play();

    makeElementsDisappear( [ domElements$.chatBubbles.ninth, domElements$.schnitzel.shocked, domElements$.presentButtons.second ] );

    makeElementsAppear( [ domElements$.chatBubbles.tenth, domElements$.schnitzel.annoyed, domElements$.presentButtons.third ] );

    toggleAnimationClass( domElements$.chatBubbles.tenth, 350 );
    toggleAnimationClass( domElements$.schnitzel.annoyed, 0 );
    toggleAnimationClass( domElements$.presentButtons.third, 450 );
} )

domElements$.presentButtons.third.addEventListener( "click", function () {
    domElements$.sounds.pop.play();

    makeElementsDisappear( [ domElements$.chatBubbles.tenth, domElements$.schnitzel.annoyed, domElements$.presentButtons.third ] );

    makeElementsAppear( [ domElements$.chatBubbles.eleventh, domElements$.chowder.angry ] );

    toggleAnimationClass( domElements$.chatBubbles.eleventh, 250 );
    toggleAnimationClass( domElements$.chowder.angry, 0 );
} )

domElements$.chatBubbles.eleventh.addEventListener( "click", function () {
    domElements$.sounds.click.play();

    domElements$.sounds.doorbell.play();

    makeElementsDisappear( [ domElements$.chatBubbles.eleventh, domElements$.chowder.angry ] );

    makeElementsAppear( [ domElements$.chatBubbles.twelfth, domElements$.chowder.diamond, domElements$.presentButtons.fourth ] );

    toggleAnimationClass( domElements$.chatBubbles.twelfth, 350 );
    toggleAnimationClass( domElements$.chowder.diamond, 0 );
    toggleAnimationClass( domElements$.presentButtons.fourth, 350 );
} )

domElements$.presentButtons.fourth.addEventListener( "click", function () {
    domElements$.sounds.click.play();

    domElements$.songs.instrumental.pause();
    
    makeElementsDisappear( [ domElements$.chatBubbles.twelfth, domElements$.chowder.diamond, domElements$.presentButtons.fourth ] );

    setTimeout( function () {
        domElements$.sounds.partyHorn.play();
        makeElementsAppear( [ domElements$.cheeseVideo ] );
        domElements$.cheeseVideo.classList.toggle('fade-in-animation');
    }, 2000 );
} )

domElements$.cheeseVideo.addEventListener( "ended", function () {
    domElements$.cheeseVideo.classList.toggle('fade-out-animation');

    setTimeout( function () {
        makeElementsDisappear( [ domElements$.cheeseVideo ] );

        domElements$.songs.remix.play();

        makeElementsAppear( [ domElements$.endingBubbles.first, domElements$.endingBubbles.second, domElements$.endingBubbles.third ] );

        toggleAnimationClass( domElements$.endingBubbles.first, 350 );
        toggleAnimationClass( domElements$.endingBubbles.second, 200 );
        toggleAnimationClass( domElements$.endingBubbles.third, 50 );
    }, 2000 )
} )