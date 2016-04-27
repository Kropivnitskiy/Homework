var body = document.querySelector('body');
    container = document.createElement('div');
    container.className = 'container';
    container.style.width = '700px';
    container.style.margin = '0 auto';
    body.appendChild(container);

var header = document.createElement('h1');
    header.style.textAlign = 'center';
    header.style.marginBottom = '30px';
    header.innerHTML = "Тест по программированию";
    container.appendChild(header);

var test = {

    question: ['Вопрос №1',
                'Вопрос №2',
                'Вопрос №3'],

    answer: ['Вариант ответа №1',
              'Вариант ответа №2',
              'Вариант ответа №3'],

    list: function () {
        var list = document.createElement('ol');

        for (var i = 0; i < this.question.length; i++) {
            var listItem = document.createElement('li');
            list.appendChild(listItem);
            container.appendChild(list);

            var question = document.createElement('p');
            question.innerHTML = this.question[i];
            listItem.appendChild(question);

            var answer = document.createElement('ul');

            for (var j = 0; j < this.answer.length; j++) {
                var answerItem = document.createElement('li');
                answer.appendChild(answerItem);
                listItem.appendChild(answer);
                answerItem.className = 'checkbox';

                var input = document.createElement('input');
                input.setAttribute('type', 'checkbox');
                answerItem.appendChild(input);

                var textAnswer = document.createElement('p');
                answerItem.appendChild(textAnswer);
                textAnswer.innerHTML = this.answer[j];
            }
        }
    }
};

test.list();

var button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.innerHTML = "Проверить мои результаты";
    button.style.width = '350px';
    button.style.height = '50px';
    button.style.margin = '30px 0 0 150px';
    button.style.fontSize = '20px';
    container.appendChild(button);

// проверка
// console.log(body);