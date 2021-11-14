---
title: 'Steel Mountain - Tryhackme.com'
date: '2021-11-14'
tags: ['writeup', 'ctf', 'tryhackme']
draft: false
summary: 'The Time Traveller (for so it will be convenient to speak of him) was
expounding a recondite matter to us. His pale grey eyes shone and
twinkled, and his usually pale face was flushed and animated...'
---

# Steel Mountain

## Description

This room will feature a Mr. Robot themed Windows machine, that you have to enumerate and gain initial access with Metasploit. After that use a Powershell script to further enumerate the machine and escalate your privileges to Administrator.

## Task 1: Intruduction

### Who is the employee of the month?

- [x] Bill Harper

![The website that is running on port 80](/static/images/blog/steel-mountain-writeup/Screenshot_2021-10-13_14-45-17.png)

We get presented a blank page with the company logo and a picture.

![Viewing the page source](/static/images/blog/steel-mountain-writeup/Screenshot_2021-10-13_14-45-46.png)

After checking the page source (STRG + U), we see that the picture is named "BillHarper.png", this could possibly be the name of the employee.

![Google Image Search](/static/images/blog/steel-mountain-writeup/Screenshot_2021-10-13_14-48-53.png)

Using Googles reverse image search, we can confirm that the name we are looking for is "Bill Harper".

## Task 2: Initial Access

### Scan the machine with nmap. What is the other port running a web server on?

- [x] 8080

![The NMAP scan](/static/images/blog/steel-mountain-writeup/Screenshot_2021-10-13_14-54-43.png)

Running an NMAP scan to find open ports (-p-), service versions (-sV) and saving it to a file (| tee), so we can check it later if we need to. We can see that it's a Windows maschine running another web server on port 8080.

```bash
nmap 10.10.237.146 -sV -p- | tee nmap_initial.txt
```

### Take a look at the other web server. What file server is running?

- [x] Rejetto HTTP File Server

![Visiting the website on port 8080](/static/images/blog/steel-mountain-writeup/Screenshot_2021-10-13_14-54-54.png)

When visiting the webiste we just found, we get presented an oldshool file server overlay, stating the server information in the bottom left corner.

### What is the CVE number to exploit this file server?

- [x] 2014-6287

![searching exploid-db](/static/images/blog/steel-mountain-writeup/Screenshot_2021-10-13_14-57-12.png)

Searching exploid-db we find a **R**emote **C**ommand **E**xecution script using Metasploid.

### Use Metasploit to get an initial shell. What is the user flag?

![loading the exploid](/static/images/blog/steel-mountain-writeup/Screenshot_2021-10-13_14-59-03.png)

Since we now know what exploit we want to use, fire up Metasploit (msfconsole) and search for it (search 2014-6287) and load it (use 0). After that we need to find out what options we have to set (options).

![configuring the exploid](/static/images/blog/steel-mountain-writeup/Screenshot_2021-10-13_14-59-44.png)

Now set the variables we need to fill in.

```bash
set RHOSTS 10.10.237.146
set RPORT 8080
```

![execute the exploid](/static/images/blog/steel-mountain-writeup/Screenshot_2021-10-13_15-17-17.png)

Execute! We got ourselfes a nice and cozy meterpreter shell on the target.

![get the first flag](/static/images/blog/steel-mountain-writeup/Screenshot_2021-10-13_15-18-08.png)

Next we are searching for the user.txt flag. Change into the user directory, to Bill and then to the Desktop. Here we got our first flag, use cat to print it out.

```bash
meterpreter> cat user.txt
```

## Task 3: Privilege Escalation

### What is the name of the service which shows up as an unquoted service path vulnerability?

- [x] AdvancedSystemCareService9

Now we are downloading the PowerUp.ps1 script that is given to us [here](https://raw.githubusercontent.com/PowerShellMafia/PowerSploit/master/Privesc/PowerUp.ps1) to our maschine using a secound command line window and upload it to the target with meterpreter (upload).

```bash
wget https://raw.githubusercontent.com/PowerShellMafia/PowerSploit/master/Privesc/PowerUp.ps1

```

```bash
meterpreter> upload /PowerUp.ps1
```

![further enumeration](/static/images/blog/steel-mountain-writeup/Screenshot_2021-10-13_15-28-50.png)

That's it, we got root access.

![done](/static/images/blog/steel-mountain-writeup/hurray.gif)
