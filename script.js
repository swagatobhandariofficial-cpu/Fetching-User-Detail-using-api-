const refreshBtn = document.querySelector("#refreshBtn");
const icon = document.querySelector(".icnn");
function getUsers(){
  fetch("https://randomuser.me/api/?results=9")
  .then(raw => raw.json())
  .then(data => {
    document.querySelector(".users").innerHTML="";
    data.results.forEach(user => {

      const container = document.querySelector(".users");

      // check gender
      const isFemale = user.gender === "female";

      // CARD
      const card = document.createElement("div");
      card.className = "bg-gray-800 text-gray-100 rounded-xl shadow-lg w-80 p-6 flex flex-col min-h-[300]";

      // PROFILE ROW
      const profileRow = document.createElement("div");
      profileRow.className = "flex items-center gap-4";

      // IMAGE
      const img = document.createElement("img");
      img.src = user.picture.large;
      img.className = `w-16 h-16 rounded-full border-2 ${
        isFemale ? "border-pink-500" : "border-indigo-500"
      }`;

      // NAME BOX
      const nameBox = document.createElement("div");

      const name = document.createElement("h2");
      name.className = "text-lg font-semibold";
      name.innerText = `${user.name.first} ${user.name.last}`;

      const role = document.createElement("p");
      role.className = "text-sm text-gray-400";
      role.innerText = user.email;

      // BIO
      const bio = document.createElement("p");
      bio.className = "mt-4 text-sm text-gray-300";
      bio.innerText = "Passionate about building scalable web apps and clean UI.";

      // STATS
      const stats = document.createElement("div");
      stats.className = "flex justify-between mt-5 text-center";

      const statData = [
        { value: "120", label: "Posts" },
        { value: "3.5k", label: "Followers" },
        { value: "180", label: "Following" }
      ];

      statData.forEach(item => {
        const box = document.createElement("div");

        const value = document.createElement("p");
        value.className = "text-lg font-bold";
        value.innerText = item.value;

        const label = document.createElement("p");
        label.className = "text-xs text-gray-400";
        label.innerText = item.label;

        box.append(value, label);
        stats.appendChild(box);
      });

      // BUTTON
      const btn = document.createElement("button");
      btn.className = `mt-6 w-full transition rounded-lg py-2 text-sm font-medium ${
        isFemale
          ? "bg-pink-600 hover:bg-pink-700"
          : "bg-indigo-600 hover:bg-indigo-700"
      }`;
      btn.innerText = "Follow";

      // APPEND
      nameBox.append(name, role);
      profileRow.append(img, nameBox);
      card.append(profileRow, bio, stats, btn);
      container.appendChild(card);
    });
  })
  .catch(err => console.log(err));
}

getUsers();





  refreshBtn.addEventListener("click", () => {
  // ICON ANIMATION
  icon.animate(
    [
      { transform: "rotate(0deg) scale(1)" },
      { transform: "rotate(180deg) scale(1.15)" },
      { transform: "rotate(360deg) scale(1)" }
    ],
    {
      duration: 600,
      easing: "ease-in-out"
    }
  );

  getUsers();
});
