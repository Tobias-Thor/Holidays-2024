// Countdown Timer
// Select the date input element for the user to specify the target date for the countdown.
const dateSelector = document.getElementById('dateSelector');
// Create an object to store references to the HTML elements that display the countdown time.
const countdown = {
  days: document.getElementById('days'),  // Element to show remaining days.
  hours: document.getElementById('hours'), // Element to show remaining hours.
  minutes: document.getElementById('minutes'), // Element to show remaining minutes.
  seconds: document.getElementById('seconds'), // Element to show remaining seconds.
};

// Define a function to update the countdown timer based on a target date.
function updateCountdown(targetDate) {
  // Get the current date and time.
  const now = new Date();
  // Calculate the difference between the target date and the current date in milliseconds.
  const difference = new Date(targetDate) - now;
  
  // Check if the countdown has ended (difference is zero or negative).
  if (difference <= 0) {
  // Set all countdown elements to 0 if the target date has passed or is reached.
    countdown.days.textContent = 0;
    countdown.hours.textContent = 0;
    countdown.minutes.textContent = 0;
    countdown.seconds.textContent = 0;
    return; // Exit the function as no further calculation is needed.
  }

  // Convert the difference into days, hours, minutes, and seconds.
  const days = Math.floor(difference / (1000 * 60 * 60 * 24)); // Calculate full days remaining.
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24); // Remaining hours after full days.
  const minutes = Math.floor((difference / (1000 * 60)) % 60); // Remaining minutes after full hours.
  const seconds = Math.floor((difference / 1000) % 60); // Remaining seconds after full minutes.

  // Update the countdown display with the calculated values.
  countdown.days.textContent = days;
  countdown.hours.textContent = hours;
  countdown.minutes.textContent = minutes;
  countdown.seconds.textContent = seconds;
}

// Initialize the target date with the current value of the date input field.
let targetDate = dateSelector.value;
// Set up a recurring function to update the countdown every second.
setInterval(() => updateCountdown(targetDate), 1000);

// Add an event listener to update the target date and refresh the countdown when the user changes the date.
dateSelector.addEventListener('change', (event) => {
  targetDate = event.target.value; // Update the target date with the user's input.
  updateCountdown(targetDate);  // Refresh the countdown immediately.
}); 

// Food Planning with Remove Button
// Add a click event listener to the 'Add Food' button.
addFoodBtn.addEventListener('click', () => {
  // Get the trimmed value of the food input field to avoid extra spaces.
  const dish = foodInput.value.trim();
  
  // Proceed only if the input is not empty.
  if (dish) {
    // Create a new list item (li) element to represent the food dish.
    const li = document.createElement('li');
    // Set the content of the list item to include the dish name and a remove button.
    li.innerHTML = `${dish} <button class="remove-btn">X</button>`;
    // Append the new list item to the food list.
    foodList.appendChild(li);
    // Clear the food input field to prepare for the next entry.
    foodInput.value = '';
    // Add a click event listener to the remove button within the new list item.
    li.querySelector('.remove-btn').addEventListener('click', () => {
      li.remove(); // Remove the list item when the remove button is clicked.
    });
  }
});

// Wishlist with Remove Button
// Add a submit event listener to the wishlist form.
wishlistForm.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior to avoid page reload.
  event.preventDefault();
  
  // Retrieve and trim the input values for the child's name and gift.
  const childName = document.getElementById('childName').value.trim();
  const gift = document.getElementById('gift').value.trim();
  // Get the selected behavior (nice or naughty) from the dropdown.
  const behavior = document.getElementById('behavior').value;

  // Proceed only if both childName and gift fields are filled.
  if (childName && gift) {
    // Create a new list item to display the wishlist entry.
    const li = document.createElement('li');
    // Set the inner HTML of the list item to include the wishlist details and a remove button.
    li.innerHTML = `
      <strong>${childName}</strong> wants <em>${gift}</em>.
      Behavior: <span style="color: ${behavior === 'nice' ? 'white' : 'black'}">${behavior}</span>.
      <button class="remove-btn">X</button>
    `;
    // Append the list item to the wishlist.
    wishlist.appendChild(li);
    // Add a click event listener to the remove button within the list item.
    li.querySelector('.remove-btn').addEventListener('click', () => {
      li.remove(); // Remove the list item when the remove button is clicked.
    });
    // Reset the form fields for the next entry.
    wishlistForm.reset();
  }
});

// Random Christmas Stories or Poems
// Define an array of Christmas stories or poems as strings.
const stories = [
  `Twas the night before Christmas, when all through the house 
Not a creature was stirring, not even a mouse;
The stockings were hung by the chimney with care,
In hopes that St. Nicholas soon would be there;
The children were nestled all snug in their beds;
While visions of sugar-plums danced in their heads;
And mamma in her 'kerchief, and I in my cap,
Had just settled our brains for a long winter's nap,
When out on the lawn there arose such a clatter,
I sprang from my bed to see what was the matter.
Away to the window I flew like a flash,
Tore open the shutters and threw up the sash.
The moon on the breast of the new-fallen snow,
Gave a lustre of midday to objects below,
When what to my wondering eyes did appear,
But a miniature sleigh and eight tiny rein-deer,
With a little old driver so lively and quick,
I knew in a moment he must be St. Nick.
More rapid than eagles his coursers they came,
And he whistled, and shouted, and called them by name:
"Now, Dasher! now, Dancer! now Prancer and Vixen!
On, Comet! on, Cupid! on, Donder and Blitzen!
To the top of the porch! to the top of the wall!
Now dash away! dash away! dash away all!"
As leaves that before the wild hurricane fly,
When they meet with an obstacle, mount to the sky;
So up to the housetop the coursers they flew
With the sleigh full of toys, and St. Nicholas too—
And then, in a twinkling, I heard on the roof
The prancing and pawing of each little hoof.
As I drew in my head, and was turning around,
Down the chimney St. Nicholas came with a bound.
He was dressed all in fur, from his head to his foot,
And his clothes were all tarnished with ashes and soot;
A bundle of toys he had flung on his back,
And he looked like a pedler just opening his pack.
His eyes—how they twinkled! his dimples, how merry!
His cheeks were like roses, his nose like a cherry!
His droll little mouth was drawn up like a bow,
And the beard on his chin was as white as the snow;
The stump of a pipe he held tight in his teeth,
And the smoke, it encircled his head like a wreath;
He had a broad face and a little round belly
That shook when he laughed, like a bowl full of jelly.
He was chubby and plump, a right jolly old elf,
And I laughed when I saw him, in spite of myself;
A wink of his eye and a twist of his head
Soon gave me to know I had nothing to dread;
He spoke not a word, but went straight to his work,
And filled all the stockings; then turned with a jerk,
And laying his finger aside of his nose,`,

    `"I heard the bells on Christmas Day
Their old, familiar carols play,
    And wild and sweet
    The words repeat
Of peace on earth, good-will to men!

And thought how, as the day had come,
The belfries of all Christendom
    Had rolled along
    The unbroken song
Of peace on earth, good-will to men!

Till ringing, singing on its way,
The world revolved from night to day,
    A voice, a chime,
    A chant sublime
Of peace on earth, good-will to men!

Then from each black, accursed mouth
The cannon thundered in the South,
    And with the sound
    The carols drowned
Of peace on earth, good-will to men!

It was as if an earthquake rent
The hearth-stones of a continent,
    And made forlorn
    The households born
Of peace on earth, good-will to men!

And in despair I bowed my head;
"There is no peace on earth," I said;
    "For hate is strong,
    And mocks the song
Of peace on earth, good-will to men!"

Then pealed the bells more loud and deep:
"God is not dead, nor doth He sleep;
    The Wrong shall fail,
    The Right prevail,
With peace on earth, good-will to men.`,

`Silent night, holy night
All is calm, all is bright
Round yon Virgin, Mother and Child
Holy Infant so tender and mild
Sleep in heavenly peace
Sleep in heavenly peace

Silent night, holy night
Shepherds quake at the sight
Glories stream from heaven afar
Heavenly hosts sing Alleluia
Christ the Savior is born
Christ the Savior is born

Silent night, holy night
Son of God, love's pure light
Radiant beams from Thy holy face
With the dawn of redeeming grace
Jesus Lord, at Thy birth
Jesus Lord, at Thy birth`,

`1 O little town of Bethlehem,
how still we see thee lie!
Above thy deep and dreamless sleep
the silent stars go by.
Yet in thy dark streets shineth
the everlasting light;
the hopes and fears of all the years
are met in thee tonight.
2 For Christ is born of Mary;
and, gathered all above,
while mortals sleep, the angels keep
their watch of wond'ring love.
O morning stars, together
proclaim the holy birth,
and praises sing to God the King,
and peace to men on earth.
3 How silently, how silently,
the wondrous gift is giv'n!
So God imparts to human hearts
the blessings of His heav'n.
No ear may hear His coming,
but in this world of sin,
where meek souls will receive Him still,
the dear Christ enters in.
4 O holy Child of Bethlehem,
descend to us, we pray;
cast out our sin and enter in;
be born in us today.
We hear the Christmas angels,
the great glad tidings tell;
O come to us, abide with us,
our Lord Emmanuel!`,

`Over the river, and through the wood,
To Grandfather's house we go;
the horse knows the way to carry the sleigh
through the white and drifted snow.

Over the river, and through the wood,
to Grandfather's house away!
We would not stop for doll or top,
for 'tis Thanksgiving Day.

Over the river, and through the wood—
oh, how the wind does blow!
It stings the toes and bites the nose
as over the ground we go.

Over the river, and through the wood—
and straight through the barnyard gate,
We seem to go extremely slow,
it is so hard to wait!

Over the river, and through the wood—
When Grandmother saw us come,
She will say, "O, dear, the children are here,
bring a pie for everyone."

Over the river, and through the wood—
now Grandmother's cap I spy!
Hurrah for the fun! Is the pudding done?
Hurrah for the pumpkin pie!`,

`In the bleak mid-winter
Frosty wind made moan,
Earth stood hard as iron,
Water like a stone;
Snow had fallen, snow on snow,
Snow on snow,
In the bleak mid-winter
Long ago.

Our God, Heaven cannot hold Him
Nor earth sustain;
Heaven and earth shall flee away
When He comes to reign:
In the bleak mid-winter
A stable-place sufficed
The Lord God Almighty,
Jesus Christ.

Enough for Him, whom cherubim
Worship night and day,
A breastful of milk
And a mangerful of hay;
Enough for Him, whom angels
Fall down before,
The ox and ass and camel
Which adore.

Angels and archangels
May have gathered there,
Cherubim and seraphim
Thronged the air,
But only His mother
In her maiden bliss,
Worshipped the Beloved
With a kiss.

What can I give Him,
Poor as I am?
If I were a shepherd
I would bring a lamb,
If I were a wise man
I would do my part,
Yet what I can I give Him,
Give my heart.`,

`Deck the halls with boughs of holly
Fa-la-la-la-la, la-la-la-la
'Tis the season to be jolly
Fa-la-la-la-la, la-la-la-la
Don we now our gay apparel
Fa-la-la, la-la-la, la-la-la
Troll the ancient Yule-tide carol
Fa-la-la-la-la, la-la-la-la

[Verse 2]
See the blazing Yule before us
Fa-la-la-la-la, la-la-la-la
Strike the harp and join the chorus
Fa-la-la-la-la, la-la-la-la
Follow me in merry measure
Fa-la-la, la-la-la, la-la-la
While I tell of Yule-tide treasure
Fa-la-la-la-la, la-la-la-la

[Verse 3]
Fast away the old year passes
Fa-la-la-la-la, la-la-la-la
Hail the new year, lads and lasses
Fa-la-la-la-la, la-la-la-la
Sing we joyous, all together
Fa-la-la, la-la-la, la-la-la
Heedless of the wind and weather
Fa-la-la-la-la, la-la-la-la`
];
// Get references to the button and display area for random stories.
const randomStoryBtn = document.getElementById('randomStoryBtn');
const storyDisplay = document.getElementById('storyDisplay');
// Add a click event listener to the random story button.
randomStoryBtn.addEventListener('click', () => {
  // Generate a random index within the range of the stories array.
  const randomIndex = Math.floor(Math.random() * stories.length);
  // Select a random story and replace newline characters with HTML line breaks.
  const selectedStory = stories[randomIndex].replace(/\n/g, '<br>'); 
  // Display the formatted story in the story display area using innerHTML.
  storyDisplay.innerHTML = selectedStory; 
});

