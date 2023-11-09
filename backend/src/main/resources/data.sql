
INSERT INTO public.quiz(id) VALUES (1);
INSERT INTO public.question(id, quiz_id, question) VALUES (1,1,'Java');
INSERT INTO public.answer(id, question_id, answer, is_correct) VALUES (1,1,'Yes', true);
INSERT INTO public.answer(id, question_id, answer) VALUES (2,1,'No');
INSERT INTO public.quiz(id) VALUES (2);
INSERT INTO public.question(id, quiz_id, question) VALUES (2,2,'JavaScript');
INSERT INTO public.answer(id, question_id, answer) VALUES (3,2,'Yes');
INSERT INTO public.answer(id, question_id, answer, is_correct) VALUES (4,2,'No',true);
INSERT INTO public.question(id, quiz_id, question) VALUES (3,2,'.NET');
INSERT INTO public.answer(id, question_id, answer) VALUES (5,3,'Yes');
INSERT INTO public.answer(id, question_id, answer) VALUES (6,3,'No');
INSERT INTO public.score(score, id, quiz_id, name) VALUES (1,1,1,'Kaj');
INSERT INTO public.score(score, id, quiz_id, name) VALUES (0,3,1,'Max');
INSERT INTO public.score(score, id, quiz_id, name) VALUES (2,2,2,'Ådi');
INSERT INTO public.score(score, id, quiz_id, name) VALUES (1,4,2,'Tor');
