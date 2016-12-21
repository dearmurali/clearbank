/**
 * 
 */
package com.mindtree.clearbank.account.entity;

/**
 * @author M1037185
 *
 */
public class Fav_links
{
    private String label_1;

    private String link_url_1;

    public String getLabel_1 ()
    {
        return label_1;
    }

    public void setLabel_1 (String label_1)
    {
        this.label_1 = label_1;
    }

    public String getLink_url_1 ()
    {
        return link_url_1;
    }

    public void setLink_url_1 (String link_url_1)
    {
        this.link_url_1 = link_url_1;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [label_1 = "+label_1+", link_url_1 = "+link_url_1+"]";
    }
}