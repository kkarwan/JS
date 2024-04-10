function obrazek(img) {
   fullimg = document.getElementById("fullimg");
   fullimg.src = img.src;
   fullimg.alt = img.alt;
   fullimg.setAttribute("title",img.alt);
   //to jest to samo co wyżej można zapisać tak:
   //fullimg.title = img.alt;
}