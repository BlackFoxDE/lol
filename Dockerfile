FROM debian

RUN apt update
RUN apt install git node -y

COPY . /src

WORKDIR /src

RUN git config --global credential.helper 'store --file ~/.my-credentials'

COPY .cred ~/.my-credentials