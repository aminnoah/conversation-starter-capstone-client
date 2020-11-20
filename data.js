const conversationStarters = [
  {
    id: 1,
    question: "Why was your best boss the best?",
    min_number_of_people: 1,
    ok_for_entertainment: false,
    ok_for_exercise: false,
    ok_for_travel: true,
    ok_for_technology: true,
    ok_for_fashion: true,
    ok_for_holidays: true,
    ok_for_education: true,
    ok_for_work:true,
    ok_for_food:true,
    ok_for_leisure: true
  },
  {
    id: 2,
    question: "What was the last funny video you saw?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: false,
    ok_for_travel: true,
    ok_for_technology: true,
    ok_for_fashion: true,
    ok_for_holidays: true,
    ok_for_education: true,
    ok_for_work:true,
    ok_for_food:true,
    ok_for_leisure: true
  },
  {
    id: 3,
    question: "What do you do to get rid of stress?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: true,
    ok_for_travel: true,
    ok_for_technology: true,
    ok_for_fashion:true,
    ok_for_holidays:true,
    ok_for_education:true,
    ok_for_work:true,
    ok_for_food:true,
    ok_for_leisure: true
  },
  {
    id: 4,
    question: "What's your favorite number? Why?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: false,
    ok_for_travel: true,
    ok_for_technology: true,
    ok_for_fashion: true,
    ok_for_holidays: true,
    ok_for_education: true,
    ok_for_work:true,
    ok_for_food:true,
    ok_for_leisure: true,
  },
  {
    id: 5,
    question: "What are you going to do this weekend?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: true,
    ok_for_travel: true,
    ok_for_technology: true,
    ok_for_fashion: true,
    ok_for_holidays: true,
    ok_for_education: true,
    ok_for_work:true,
    ok_for_food:true,
    ok_for_leisure: true
  },
  {
    id: 6,
    question: "Who are some of your favorite athletes?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: true,
    ok_for_travel: true,
    ok_for_technology: true,
    ok_for_fashion: true,
    ok_for_holidays: true,
    ok_for_education: true,
    ok_for_work: true,
    ok_for_food: true,
    ok_for_leisure: true
  },
  {
    id: 7,
    question: "What is the worst restaurant you have ever eaten at",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: false,
    ok_for_travel: true,
    ok_for_technology: true,
    ok_for_fashion: true,
    ok_for_holidays: true,
    ok_for_education: true,
    ok_for_work:true,
    ok_for_food:true,
    ok_for_leisure: true
  },
  {
    id: 8,
    question: "Where would you like to travel next?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: false,
    ok_for_travel: true,
    ok_for_technology: true,
    ok_for_fashion: true,
    ok_for_holidays: true,
    ok_for_education: true,
    ok_for_work: true,
    ok_for_food: true,
    ok_for_leisure: true
  },
  {
    id: 9,
    question: "What is the best way to travel?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: false,
    ok_for_travel: true,
    ok_for_technology: true,
    ok_for_fashion: true,
    ok_for_holidays: true,
    ok_for_education: true,
    ok_for_work:true,
    ok_for_food:true,
    ok_for_leisure: true
  },
  {
    id: 10,
    question: "Do you prefer traveling alone or with a group?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: false,
    ok_for_travel: true,
    ok_for_technology: true,
    ok_for_fashion: true,
    ok_for_holidays: true,
    ok_for_education: true,
    ok_for_work:true,
    ok_for_food:true,
    ok_for_leisure: true
  },
  {
    id: 11,
    question: "Have you traveled to any different countries?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: false,
    ok_for_travel: true,
    ok_for_technology: true,
    ok_for_fashion: true,
    ok_for_holidays: true,
    ok_for_education: true,
    ok_for_work:true,
    ok_for_food:true,
    ok_for_leisure: true
  },
  {
    id: 12,
    question: "Where do you get your travel recommendations from?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: false,
    ok_for_travel: true,
    ok_for_technology: true,
    ok_for_fashion: true,
    ok_for_holidays: true,
    ok_for_education: true,
    ok_for_work: true,
    ok_for_food: true,
    ok_for_leisure: true
  },
  {
    id: 13,
    question: "What is your favorite piece of tech that you own?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: false,
    ok_for_travel: true,
    ok_for_technology: true
    ok_for_fashion: true,
    ok_for_holidays: true,
    ok_for_education: true
    ok_for_work:true,
    ok_for_food:true,
    ok_for_leisure: true
  },
  {
    id: 14,
    question: "Which emerging tech are you most excited about?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: false,
    ok_for_travel: true,
    ok_for_technology: true,
    ok_for_fashion: true,
    ok_for_holidays: true,
    ok_for_education: true,
    ok_for_work:true,
    ok_for_food:true,
    ok_for_leisure: true
  },
  {
    id: 15,
    question: "What old trends are coming back these days?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: true,
    ok_for_travel: true,
    ok_for_technology: true,
    ok_for_fashion:true,
    ok_for_holidays:true,
    ok_for_education:true,
    ok_for_work: true,
    ok_for_food: true,
    ok_for_leisure: true
  },
  {
    id: 16,
    question: "What is your fashion style?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: false,
    ok_for_travel: true,
    ok_for_technology: true,
    ok_for_fashion:true,
    ok_for_holidays:true,
    ok_for_education:true,
    ok_for_work: true,
    ok_for_food: true,
    ok_for_leisure: true
  },
  {
    id: 17,
    question: "What is your greatest pair of shoes you ever had?",
    min_number_of_people: 1,
    ok_for_entertainment: false,
    ok_for_exercise: false,
    ok_for_travel: true,
    ok_for_technology: true,
    ok_for_fashion:true,
    ok_for_holidays: true,
    ok_for_education: true,
    ok_for_work: true,
    ok_for_food: true,
    ok_for_leisure: true
  },
  {
    id: 18,
    question: "Who do you think has the biggest impact on fashion trends?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: true,
    ok_for_travel: true,
    ok_for_technology: true,
    ok_for_fashion:true,
    ok_for_holidays:true,
    ok_for_education:true,
    ok_for_work:true,
    ok_for_food:true,
    ok_for_leisure: true
  },
  {
    id: 19,
    question: "What personal goals do you have?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: true,
    ok_for_travel: true,
    ok_for_technology: true,
    ok_for_fashion: true,
    ok_for_holidays: true,
    ok_for_education: true,
    ok_for_work: true,
    ok_for_food: true,
    ok_for_leisure: true
  },
  {
    id: 20,
    question: "What are some goals you've already achieved?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: true,
    ok_for_travel: true,
    ok_for_technology: true,
    ok_for_fashion: true,
    ok_for_holidays: true,
    ok_for_education: true,
    ok_for_work: true,
    ok_for_food: true,
    ok_for_leisure: true
  },
  {
    id: 21,
    question: "How do you stay motivated?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: true,
    ok_for_travel: true,
    ok_for_technology: true,
    ok_for_fashion: true,
    ok_for_holidays: true,
    ok_for_education: true,
    ok_for_work: true,
    ok_for_food: true,
    ok_for_leisure: true
  },
  {
    id: 22,
    question: "Do you prefer summer or winter activities?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: true,
    ok_for_travel: true,
    ok_for_technology: false,
    ok_for_fashion: true,
    ok_for_holidays: true,
    ok_for_education: false,
    ok_for_work: false,
    ok_for_food: true,
    ok_for_leisure: true
  },
  {
    id: 23,
    question: "Do you prefer four seasons or one season year round?",
    min_number_of_people: 1,
    ok_for_entertainment: false,
    ok_for_exercise: false,
    ok_for_travel: true,
    ok_for_technology: false,
    ok_for_fashion: true,
    ok_for_holidays: true,
    ok_for_education: false,
    ok_for_work: false,
    ok_for_food: false,
    ok_for_leisure: true
  },
  {
    id: 24,
    question: "What is your favorite holiday?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: false,
    ok_for_travel: true,
    ok_for_technology: false,
    ok_for_fashion: false,
    ok_for_holidays: true,
    ok_for_education: false,
    ok_for_work: false,
    ok_for_food: true,
    ok_for_leisure: true
  },
  {
    id: 25,
    question: "What do you think of online education?",
    min_number_of_people: 1,
    ok_for_entertainment: false,
    ok_for_exercise: false,
    ok_for_travel: false,
    ok_for_technology: true,
    ok_for_fashion: false,
    ok_for_holidays: false,
    ok_for_education: true,
    ok_for_work: true,
    ok_for_food: false,
    ok_for_leisure: true
  },
  {
    id: 26,
    question: "Are bigger or smaller schools better?",
    min_number_of_people: 1,
    ok_for_entertainment: false,
    ok_for_exercise: false,
    ok_for_travel: false,
    ok_for_technology: false,
    ok_for_fashion: false,
    ok_for_holidays: false,
    ok_for_education: true,
    ok_for_work: true,
    ok_for_food: false,
    ok_for_leisure: true
  },
  {
    id: 27,
    question: "What is your favorite type of food?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: false,
    ok_for_travel: true,
    ok_for_technology: false,
    ok_for_fashion: false,
    ok_for_holidays: true,
    ok_for_education: false,
    ok_for_work: false,
    ok_for_food: true,
    ok_for_leisure: true
  },
  {
    id: 28,
    question: "What do you want your last meal to be?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: false,
    ok_for_travel: false,
    ok_for_technology: false,
    ok_for_fashion: false,
    ok_for_holidays: false,
    ok_for_education: false,
    ok_for_work: false,
    ok_for_food: true,
    ok_for_leisure: true
  },
  {
    id: 29,
    question: "If you had a personal mascot, what would it be?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: true,
    ok_for_travel: false,
    ok_for_technology: false,
    ok_for_fashion: false,
    ok_for_holidays: false,
    ok_for_education: false,
    ok_for_work: false,
    ok_for_food: false,
    ok_for_leisure: true
  },
  {
    id: 30,
    question: "Time freezes for everyone but you for one day. What do you do?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: false,
    ok_for_travel: false,
    ok_for_technology: false,
    ok_for_fashion: false,
    ok_for_holidays: false,
    ok_for_education: false,
    ok_for_work: false,
    ok_for_food: false,
    ok_for_leisure: true
  },
  {
    id: 31,
    question: "You have to relive one day of your life forever. Which day do you choose?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: false,
    ok_for_travel: false,
    ok_for_technology: false,
    ok_for_fashion: false,
    ok_for_holidays: false,
    ok_for_education: false,
    ok_for_work: false,
    ok_for_food: false,
    ok_for_leisure: true
  },
  {
    id: 32,
    question: "One hour conversation with anyone, present or past. Who would it be?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: true,
    ok_for_travel: false,
    ok_for_technology: true,
    ok_for_fashion: false,
    ok_for_holidays: false,
    ok_for_education: false,
    ok_for_work: false,
    ok_for_food: false,
    ok_for_leisure: true
  },
  {
    id: 33,
    question: "Are you usually early or late?",
    min_number_of_people: 1,
    ok_for_entertainment: false,
    ok_for_exercise: false,
    ok_for_travel: true,
    ok_for_technology: false,
    ok_for_fashion: false,
    ok_for_holidays: true,
    ok_for_education: false,
    ok_for_work: true,
    ok_for_food: false,
    ok_for_leisure: true
  },
  {
    id: 34,
    question: "What skill would you like to master?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: true,
    ok_for_travel: false,
    ok_for_technology: true,
    ok_for_fashion: true,
    ok_for_holidays: false,
    ok_for_education: true,
    ok_for_work: true,
    ok_for_food: true,
    ok_for_leisure: true
  },
  {
    id: 35,
    question: "What movie title best describes you?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: false,
    ok_for_travel: false,
    ok_for_technology: false,
    ok_for_fashion: false,
    ok_for_holidays: false,
    ok_for_education: false,
    ok_for_work: false,
    ok_for_food: false,
    ok_for_leisure: true
  },
  {
    id: 36,
    question: "What kind of art do you enjoy the most?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: false,
    ok_for_travel: false,
    ok_for_technology: false,
    ok_for_fashion: false,
    ok_for_holidays: false,
    ok_for_education: false,
    ok_for_work: false,
    ok_for_food: false,
    ok_for_leisure: true
  },
  {
    id: 37,
    question: "What's the best way to start the day?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: true,
    ok_for_travel: false,
    ok_for_technology: true,
    ok_for_fashion: false,
    ok_for_holidays: false,
    ok_for_education: true,
    ok_for_work: false,
    ok_for_food: true,
    ok_for_leisure: true
  },
  {
    id: 38,
    question: "How different is your life from a year ago?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: true,
    ok_for_travel: true,
    ok_for_technology: true,
    ok_for_fashion: true,
    ok_for_holidays: true,
    ok_for_education: true,
    ok_for_work: true,
    ok_for_food: true,
    ok_for_leisure: true
  },
  {
    id: 39,
    question: "What cities could you see yourself living in?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: false,
    ok_for_travel: true,
    ok_for_technology: false,
    ok_for_fashion: false,
    ok_for_holidays: false,
    ok_for_education: false,
    ok_for_work: true,
    ok_for_food: true,
    ok_for_leisure: true
  },
  {
    id: 40,
    question: "What's worth spending more on to get the best?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: true,
    ok_for_travel: true,
    ok_for_technology: true,
    ok_for_fashion: true,
    ok_for_holidays: true,
    ok_for_education: true,
    ok_for_work: false,
    ok_for_food: true,
    ok_for_leisure: true
  },
  {
    id: 41,
    question: "What are you looking forward to in the coming months?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: true,
    ok_for_travel: true,
    ok_for_technology: true,
    ok_for_fashion: true,
    ok_for_holidays: true,
    ok_for_education: true,
    ok_for_work: true,
    ok_for_food: true,
    ok_for_leisure: true
  },
  {
    id: 42,
    question: "Why did you decide to do the work you are doing now?",
    min_number_of_people: 1,
    ok_for_entertainment: false,
    ok_for_exercise: false,
    ok_for_travel: false,
    ok_for_technology: true,
    ok_for_fashion: false,
    ok_for_holidays: false,
    ok_for_education: true,
    ok_for_work: true,
    ok_for_food: true,
    ok_for_leisure: true
  },
  {
    id: 43,
    question: "What could you give a 40 minute presentation on with 0 preperation?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: true,
    ok_for_travel: true,
    ok_for_technology: true,
    ok_for_fashion: true,
    ok_for_holidays: true,
    ok_for_education: true,
    ok_for_work: true,
    ok_for_food: true,
    ok_for_leisure: true
  },
  {
    id: 44,
    question: "What song have you not been able to get out of your head?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: false,
    ok_for_travel: false,
    ok_for_technology: false,
    ok_for_fashion: false,
    ok_for_holidays: false,
    ok_for_education: false,
    ok_for_work: false,
    ok_for_food: false,
    ok_for_leisure: true
  },
  {
    id: 45,
    question: "If you could eliminate one thing from your daily life what would it be?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: true,
    ok_for_travel: true,
    ok_for_technology: true,
    ok_for_fashion: false,
    ok_for_holidays: false,
    ok_for_education: true,
    ok_for_work: true,
    ok_for_food: true,
    ok_for_leisure: true
  },
  {
    id: 46,
    question: "If you cold re-do this week, what would you do differently?",
    min_number_of_people: 1,
    ok_for_entertainment: true,
    ok_for_exercise: false,
    ok_for_travel: true,
    ok_for_technology: true,
    ok_for_fashion: false,
    ok_for_holidays: false,
    ok_for_education: true,
    ok_for_work: false,
    ok_for_food: true,
    ok_for_leisure: true
  },
]