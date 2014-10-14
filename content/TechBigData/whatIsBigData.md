---
Title:       "Salesforce Integration"
Description: "Integrating to the Salesforce api "
Tags:        [ "cloud", "Salesforce", "integration" ]
date:        "2013-06-20"
Topics:      ["cloud", "Salesforce", "integration" ]
Slug:        "business in the cloud"
project_url: "http://github.com/spf13/nitro"
Author: Richard Donovan
draft: false
---

## needs to be re-written ##


Big Data traditionally has referred to a collection of data too massive to be handled efficiently by traditional database tools and methods. This original definition has expanded over the years to identify tools (Big Data tools) that tackle extremely large datasets (NoSQL databases, MapReduce, Hadoop, NewSQL, etc.), and to describe the industry challenge posed by having data harvesting abilities that far outstrip the ability to process, interpret, and act on that data. Technologists knew that those huge batches of user data and other data types were full of insights that could be extracted by analyzing the data in large aggregates. They just didn’t have any cheap, simple technology for organizing and querying these large batches of raw, unstructured data.

The term quickly became a buzzword for every sort of data processing product’s marketing team. Big Data became a catchall term for anything that handled non-trivial sizes of data. Sean Owen, a data scientist at Cloudera, has suggested that Big Data is a stage where individual data points are irrelevant and only aggregate analysis matters [1]. But this is true for a 400 person survey as well, and most people wouldn’t consider that very big. The key part missing from that definition is the transformation of unstructured data batches into structured datasets. It doesn’t matter if the database is relational or non-relational. Big Data is not defined by a number of terabytes, it’s rooted in the push to discoverhidden insights in data that companies used to disregard or throw away.

Due to the obstacles presented by large scale data management, the goal for developers and data scientists is two-fold: first, systems must be created to handle large scale data, and two, business intelligence and insights should be acquired from analysis of the data. Acquiring the tools and methods to meet these goals is a major focus in the data science industry, but it’s a landscape where needs and goals are still shifting.

What are the Characteristics of Big Data?
Tech companies are constantly amassing data from a variety of digital sources that is almost without end—everything from email addresses to digital images, MP3s, social media communication, server traffic logs, purchase history, and demographics. And it’s not just the data itself, but data about the data (metadata). It is a barrage of information on every level. What is it that makes this mountain of data Big Data?

One of the most helpful models for understanding the nature of Big Data is “the three Vs:” volume, velocity, and variety.

Data Volume
Volumeis the sheer size of the data being collected. There was a point in not-so-distant history where managing gigabytes of data was considered a serious task—now we have web giants like Google and Facebook handling petabytes of information about users’ digital activities. The size of the data is often seen as the first challenge of characterizing Big Data storage, but even beyond that is the capability of programs to provide architecture that can not only store but query these massive datasets. One of the most popular models for Big Data architecture comes from Google’s MapReduce concept, which was the basis for Apache Hadoop, a popular data management solution.

Data Velocity
Velocityis a problem that flows naturally from the volume characteristics of Big Data. Data velocity is the speed at which data is flowing into a business’ infrastructure and the ability of software solutions to receive and ingest that data quickly. Certain types of high-velocity data, such as streaming data, needs to be moved into storage and processed on the fly. This is often referred to as complex event processing (CEP). The ability to intercept and analyze data that has a lifespan of milliseconds is a widely sought after. This kind of quick-fire data processing has long been the cornerstone of digital financial transactions, but it is also being used to track live consumer behavior or to bring instant updates to social media feeds.

Data Variety
Variety refers to the source and type of data that is being collected. This data could be anything from raw image data to sensor readings, audio recordings, social media communication, and metadata. The challenge of data variety is being able to take raw, unstructured data and organize it so that an application can use it. This kind of structure can be achieved through architectural models that traditionally favor relational databases—but there is often a need to tidy up this data before it will even be useful to store in a raw form. Sometimes a better option is to use a schema-less, non-relational database.

How Do You Manage Big Data?
The Three Vs is a great model for getting an initial understanding of what makes Big Data a challenge for businesses. However, Big Data is not just about the data itself, but the way that it is handled. A popular way of thinking about these challenges is to look at how a business stores, processes, and accesses their data.

·  Store: Can you store the vast amounts of data being collected?

·  Process: Can you organize, clean, and analyze the data collected?

·  Access: Can you search and query this data in an organized manner?

The Store, Process, and Access model is useful for two reasons: it reminds businesses that Big Data is largely about managing data, and it demonstrates the problem of scale within Big Data management. “Big” is relative. The data batches that challenge some companies could be moved through a single Google datacenter in under a minute. The only question a company needs to ask itself is how it will store and access increasingly massive amounts of data for its particular use case. There are several high level approaches that companies have turned to in the last few years.

The Traditional Approach
The traditional method for handling most data is to use relational databases. Data warehouses are then used to integrate and analyze data from many sources. These databases are structured according to the concept of “early structure binding”—essentially, the database has predetermined “questions” that can be asked based on a schema. Relational databases are highly functional, and the goal with this type of data processing is for the database to be fully transactional. Although relational databases are the most common persistence type by a large margin (see Key Findings pg. 4-5), a growing number of use cases are not well-suited for relational schema. Relational architectures tend to have difficulty when dealing with the velocity and variety of Big Data, since their structure is very rigid. When you perform functions such as JOIN on many large data sets, the volume can be a problem as well. Instead, businesses are looking to non-relational databases, or a mixture of both types, to meet data demand.

The Newer Approach - MapReduce, Hadoop, and NoSQL Databases
In the early 2000s, web giant Google released two helpful web technologies: Google File System (GFS) and MapReduce. Both were new and unique approaches to the growing problem of Big Data, but MapReduce was chief among them, especially when it comes to its role as a major influencer of later solution models. MapReduce is a programming paradigm that allows for low cost data analysis and clustered scale-out processing.

MapReduce became the primary architectural influence for the next big thing in Big Data: the creation of the Big Data management infrastructure known as Hadoop. Hadoop’s open source ecosystem and ease of use for handling large-scale data processing operations have secured a large part of the Big Data marketplace.

Besides Hadoop, there was a host of non-relational (NoSQL) databases that emerged around 2009 to meet a different set of demands for processing Big Data. Whereas Hadoop is used for its massive scalability and parallel processing, NoSQL databases are especially useful for handling data stored within large multi-structured datasets. This kind of discrete data handling is not traditionally seen as a strong point of relational databases, but it’s also not the same kind of data operations that Hadoop is running. The solution for many businesses ends up being a combination of these approaches to data management.

Finding Hidden Data Insights
Once you get beyond storage and management, you still have the enormous task of creating actionable business intelligence (BI) from the datasets you’ve collected. This problem of processing and analyzing data is maybe one of the trickiest in the data management lifecycle. The best options for data analytics will favor an approach that is predictive and adaptable to changing data streams. The thing is, there’s so many types of analytic models and different ways of providing infrastructure for this process. Your analytics solution should scale, but to what degree? Scalability can be an enormous pain in your analytical neck, due to the problem of decreasing performance returns when scaling out an algorithm.

Ultimately, analytics tools rely on a great deal of reasoning and analysis to extract data patterns and data insights, but this capacity means nothing for a business if they can’t then create actionable intelligence. Part of this problem is that many businesses have the infrastructure to accommodate Big Data, but they aren’t asking questions about what problems they’re going to solve with the data. Implementing a Big Data-ready infrastructure before knowing what questions you want to ask is like putting the cart before the horse.

But even if we do know the questions we want to ask, data analysis can always reveal many correlations with no clear causes. As organizations get better at processing and analyzing Big Data, the next major hurdle will be pinpointing the causes behind the trends by asking the right questions and embracing the complexity of our answers.