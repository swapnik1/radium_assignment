FROM python:3.12.1-slim

WORKDIR /usr/src/app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

COPY ./wait-for-it.sh .
RUN chmod +x wait-for-it.sh

COPY ./entry.sh .
RUN chmod +x entry.sh

EXPOSE 8000

CMD ["./entry.sh"]
