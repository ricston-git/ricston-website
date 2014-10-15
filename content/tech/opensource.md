---
Title:       "Open Source Monitoring"
Description: "Open Source Monitoring"
Tags:        [ "IOT", "java", "light weight" ]
date:        "2013-06-20"
Topics:      [ "IOT", "java", "light weight" ]
Author: Richard Donovan
---

###Open Source Monitoring

based on http://www.infoworld.com/article/2683857/network-monitoring/article.html


You can't fix what you can't monitor 

There are solutions that monitor for the proper operation of severse, network gear, and applications, and there are solutions that track the performance of those systems and devices, providing trending and analysis. Some tools will sound alarms and notifications when problems are detected, while others will even trigger actions to run when alarms sound. Here is a collection of open source solutions that aim to provide some or all of these capabilities.

Cacti
Cacti is a very extensive performance graphing and trending tool that can be used to track just about any monitored metric that can be plotted on a graph. From disk utilization to fan speeds in a power supply, if it can be monitored, Cacti can track it -- and make that data quickly available. 

Nagios
Nagios is the old guard of system and network monitoring. It is fast, reliable, and extremely customizable. Nagios can be a challenge for newcomers, but the rather complex configuration is also its strength, as it can be adapted to just about any monitoring task. What it may lack in looks it makes up for in power and reliability.

Icinga
Icinga is an offshoot of Nagios that is currently being rebuilt anew. It offers a thorough monitoring and alerting framework that’s designed to be as open and extensible as Nagios is, but with several different Web UI options. Icinga 1 is closely related to Nagios, while Icinga 2 is the rewrite. Both versions are currently supported, and Nagios users can migrate to Icinga 1 very easily. 

NeDi
NeDi may not be as well known as some of the others, but it’s a great solution for tracking devices across a network. It continuously walks through a network infrastructure and catalogs devices, keeping track of everything it discovers. It can provide the current location of any device, as well as a history.

NeDi can be used to locate stolen or lost devices by alerting you if they reappear on the network. It can even display all known and discovered connections on a map, showing how every network interconnect is laid out, down to the physical port level.
 
Observium
Observium combines system and network monitoring with performance trending. It uses both static and auto discovery to identify servers and network devices, leverages a variety of monitoring methods, and can be configured to track just about any available metric. The Web UI is very clean, well thought out, and easy to navigate.
 
As shown, Observium can also display the physical location of monitored devices on a geographical map. Note too the heads-up panels showing active alarms and device counts.
  
Zabbix
Zabbix monitors servers and networks with an extensive array of tools. There are Zabbix agents for most operating systems, or you can use passive or external checks, including SNMP to monitor hosts and network devices. You'll also find extensive alerting and notification facilities, and a highly customizable Web UI that can be adapted to a variety of heads-up displays. In addition, Zabbix has specific tools that monitor Web application stacks and virtualization hypervisors.
  
Zabbix can also produce logical interconnection diagrams detailing how certain monitored objects are interconnected. These maps are customizable, and maps can be created for groups of monitored devices and hosts.
   
Ntop
Ntop is a packet sniffing tool with a slick Web UI that displays live data on network traffic passing by a monitoring interface. Instant data on network flows is available through an advanced live graphing function. Host data flows and host communication pair information is also available in real-time.    
