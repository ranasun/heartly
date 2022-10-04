FROM python:3.8

WORKDIR /python-docker

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

CMD [ "uwsgi", "--http-socket", "0.0.0.0:4000", \
               "--uid", "www-data", \
               "--plugins", "python3", \
               "--protocol", "uwsgi", \
               "--wsgi", "app:app" ]