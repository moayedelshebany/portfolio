let guestStories = JSON.parse(localStorage.getItem('guestStories')) || [];
let guestEditIndex = null;
const guestForm = document.getElementById('guestStoryForm');
const guestName = document.getElementById('guestName');
const guestEmail = document.getElementById('guestEmail');
const guestStory = document.getElementById('guestStory');
const guestSearch = document.getElementById('guestSearch');
const guestList = document.getElementById('guestStoryList');
const guestSubmit = document.getElementById('guestSubmit');

renderGuestStories();

guestForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const storyData = {
    name: guestName.value.trim(),
    email: guestEmail.value.trim(),
    story: guestStory.value.trim()
  };

  if (!storyData.name || !storyData.email || !storyData.story) return;

  if (guestEditIndex === null) {
    guestStories.push(storyData);
  } else {
    guestStories[guestEditIndex] = storyData;
    guestEditIndex = null;
    guestSubmit.textContent = 'إضافة القصة';
  }

  guestForm.reset();
  saveGuestStories();
  renderGuestStories();
});

guestSearch.addEventListener('input', renderGuestStories);

function renderGuestStories() {
  const filter = guestSearch.value.toLowerCase();
  guestList.innerHTML = '';

  guestStories.forEach((item, index) => {
    if (
      !item.name.toLowerCase().includes(filter) &&
      !item.story.toLowerCase().includes(filter)
    ) return;

    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${item.name}</strong>
      <p>${item.story}</p>
      <button onclick="editGuestStory(${index})">تعديل</button>
      <button onclick="deleteGuestStory(${index})">حذف</button>
    `;
    guestList.appendChild(li);
  });
}

function editGuestStory(index) {
  const item = guestStories[index];
  guestName.value = item.name;
  guestEmail.value = item.email;
  guestStory.value = item.story;
  guestEditIndex = index;
  guestSubmit.textContent = 'تحديث القصة';
}

function deleteGuestStory(index) {
  guestStories.splice(index, 1);
  saveGuestStories();
  renderGuestStories();
}

document.addEventListener('DOMContentLoaded', function () {
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });

  scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});